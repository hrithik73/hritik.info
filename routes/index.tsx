import IconBrandTwitter from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx';
import IconBrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx';
import IconBrandInstagram from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx';

import { Container } from '../components/Container.tsx';
import Divider from '../components/Divider.tsx';
import { socialData } from '../data/site.ts';

const HomePage = () => {
  return (
    <main>
      <Container>
        <div class='mt-5'>
          <h4 class='text-xl'>Hello, I am </h4>
          <h1 class='text-5xl font-bold mt-2'>Hritik Singh</h1>
          <h3 class='mt-5'>
            Frontend Developer with 2 years of experience building web and
            mobile apps using react. I am passionate about learning new
            technologies and building innovative solutions.
          </h3>
          <h3 class='text-2xl font-bold mt-14'>Work</h3>
          <Divider />
          <h3>
            I'm currently working at{' '}
            <a
              class='text-red-500'
              href={'https://indianic.com'}
              target='_blank'
              rel='noreferrer'
            >
              Indianic
            </a>{' '}
            as a Software Engineer, building cross-platform mobile application
            using react-native.
          </h3>
          <h3 class='text-2xl font-bold mt-14'>Side Projects</h3>
          <Divider />
          <h3>
            Apart from my main work, I loves to make side{' '}
            <a href='/projects' class='cursor-pointer text-red-500'>
              Projects
            </a>{' '}
            for fun and Write{' '}
            <a href='/blog' class='cursor-pointer text-red-500'>
              Blogs
            </a>
          </h3>
          <h3 class='text-2xl font-bold mt-16'>On the web</h3>
          <Divider />
          <a
            href={socialData.github}
            target='_blank'
            rel='noreferrer'
            class='flex flex-row gap-2 items-center cursor-pointer hover:underline'
          >
            <IconBrandTwitter class='w-5 h-5' />
            hrithik73
          </a>
          <a
            href={socialData.twitter}
            target='_blank'
            rel='noreferrer'
            class='flex flex-row gap-2 items-center cursor-pointer my-2 hover:underline'
          >
            <IconBrandGithub class='w-5 h-5' />
            hrithik73_
          </a>
          <a
            href={socialData.instagram}
            target='_blank'
            rel='noreferrer'
            class='flex flex-row gap-2 items-center cursor-pointer my-2 hover:underline'
          >
            <IconBrandInstagram class='w-5 h-5' />
            hrithik73_
          </a>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
