---
title: Import Aliases in react-native
date: 2023/09/19
description: How to configure import aliases in react-native project.
tag: react,react-native
author: Hritik Singh
---

Import alias is a great way to make your code more readable, organized, and maintainable

So what are import aliases?

Imagine you are working on a large-scale project where you are importing so many components in your code, it might look like this

```jsx
import { Primary } from '../../components/Buttons';
import icons from '../../assets/icons';
import strings from '../../constants/strings';
import Input from '../../components/Input';
import ModalView from '../../components/Modal';
import image from '../../assets/images';
```

There is nothing wrong with this code, but after a while, you might have difficulty reading and understanding from where things are imported

```jsx
import { Primary } from '@src/components/Buttons';
import icons from '@src/assets/icons';
import strings from '@src/constants/strings';
import Input from '@src/components/Input';
import ModalView from '@src/components/Modal';
import image from '@src/assets/images';
```

This might give a better idea, of where the components are imported and also looks good

### So how can I configure it in react-native?

Well, it’s a bit tricky to configure this in react native, because you have to make some changes in Babel config, but it’s not difficult at all

## React Native CLI

If you are using react-native-cli, then follow these steps

### Step 1 :

Add the `baseUrl` and `paths` in `compilerOptions` in tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

if you want `~/src` then

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```

### Step 2 :

Install babel plugin

```bash
yarn add --dev babel-plugin-module-resolver
```

Inside the `plugins` array in babel.config.js add following

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
        },
      },
    ],
    /**
     * Your other plugins
     */
  ],
};
```

and for `~/src`

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '^~/(.+)': './src/\\1',
        },
      },
    ],
    /**
     * Your other plugins
     */
  ],
};
```

## Step 3 :

Restart your metro bundler with reset caches

```bash
yarn start --reset-cache
```

Done now you can use the import aliases

### Expo

If you are using the expo cli , then this is the guide for you

### Step 1 :

Step 1 is the same as react-native-cli in tsconfig.json

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

### Step 2:

install the babel plugin for the expo

```bash
yarn add --dev babel-plugin-module-resolver
```

Add this in ` babel.config.js`

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
          },
        },
      ],
    ],
  };
};
```

If you want `@src/components` then you can simply change `~/` to` @/`

### Step 3 :

```bash
yarn start --reset-cache
```

You are good to go, If you feel any issues please feel free to comment or reach out to me at [x.com/hrithik73\_](https://x.com/hrithik73_)