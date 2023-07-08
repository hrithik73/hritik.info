import IconBrandTwitter from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx';
import IconBrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx';
import IconBrandInstagram from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx';

import { Container } from '../components/Container.tsx';

const HomePage = () => {
  return (
    <main>
      <Container>
        <div class=' mt-5'>
          <h4 class='text-xl'>Hello, I am </h4>
          <h1 class='text-5xl font-bold mt-2'>Hritik Singh</h1>
          <h3 class='mt-5'>
            I make web and mobile application mostly using javascript.
          </h3>
          <h3 class='text-2xl font-bold mt-14'>Work</h3>
          <div class='h-[1px] bg-gray-800 my-2' />
          <h3>
            I'm currently working at{' '}
            <a class='text-red-500' href={'https://indianic.com'}>
              Indianic
            </a>{' '}
            as a Software Engineer, building cross-platform mobile application
            using react-native.
          </h3>
          <h3 class='text-2xl font-bold mt-14'>Side Projects</h3>
          <div class='h-[1px] bg-gray-800 my-2' />
          <h3>
            Apart from my work, I make side projects for fun you can check out
            some of them of{' '}
            <a href='/projects' class='cursor-pointer text-red-500'>
              Project
            </a>{' '}
            page
          </h3>
          <h3 class='text-2xl font-bold mt-16'>On the web</h3>
          <div class='h-[1px] bg-gray-800 my-2' />
          <a class='flex flex-row gap-2 items-center cursor-pointer hover:underline'>
            <IconBrandTwitter class='w-5 h-5' />
            hrithik73
          </a>
          <a class='flex flex-row gap-2 items-center cursor-pointer my-2 hover:underline'>
            <IconBrandGithub class='w-5 h-5' />
            hrithik73
          </a>
          <a class='flex flex-row gap-2 items-center cursor-pointer my-2 hover:underline'>
            <IconBrandInstagram class='w-5 h-5' />
            hrithik73
          </a>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
