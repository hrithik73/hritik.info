---
title: "Import Alias in React-Native"
published_at: 5 July 2023
---

In this article we are going to learn how to configure import alias (absolute
import) in react-native

### What is import alias ?

When you are working in a large project the local import of your component can
look something like this

<img src="https://github.com/hrithik73/hritik.info/blob/main/data/assets/import-alias-in-react-native/before.png" height="100px" width="100px">
<!-- [Logo](../assets/import-alias-in-react-native/before.png) -->

This is fine but when project grow mostly developers tends to be confused by the
files from the it is imported (although there are editor option to just jump to
the file) and also it looks kind of ugly.

Here is how imports looks after using the import alias

<img src="https://github.com/hrithik73/hritik.info/blob/main/data/assets/import-alias-in-react-native/after.png" height="100px" width="100px">

### So how we configure it in our react-native project?

It is bit of mess to configure this in react native, don't worry we will go step
by step and it is worth it

### Step 1

Goto `babel.config.js` and make these changes

#### Option 1

If you import like this add this snippet

```js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    // ... some other plugins, if you already have
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          "^~/(.+)": "./src/\\1",
        },
      },
    ],
  ],
};
```

#### Option 2

if you want import like `@/src/componet/ui/` then you can use this code snippet

```js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    // ... some other plugins, if you already have
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
        },
      },
    ],
  ],
};
```

### Step 2

Make the same Changes in `tsconfig.json`,if you have selected 1st option the in
step-1

```json
{
  "baseUrl": "./",
  "paths": { "~/_": ["./src/_"] }
}
```

or add these line if you have selected the 2nd option

```json
{
  "baseUrl": "./",
  "paths": {
    "@src/*": ["src/*/index", "src/*"]
  }
}
```

### Step 3

Restart the metro bundler with reset-cache flag

```
npx react-native start --reset-cache
```
