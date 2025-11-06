import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'Hritik Singh',
  EMAIL: 'shrithik404@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'Hritik Singh — Mobile App Developer',
  DESCRIPTION: "Mobile app developer with 4+ years of experience building flagship React Native apps. Crafting pixel-perfect, smooth mobile experiences.",
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.',
};

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'A collection of my projects, with links to repositories and demos.',
};

export const SOCIALS: Socials = [
  {
    NAME: 'twitter-x',
    HREF: 'https://twitter.com/hrithik73_',
  },
  {
    NAME: 'github',
    HREF: 'https://github.com/hrithik73',
  },
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/hrithik73/',
  },
];

export const projects = [
  {
    name: 'Voy salir',
    description: 'A social media kind of app for clubs',
    link: 'https://apps.apple.com/in/app/voy-salir-planes-y-amigos/id1480241417',
  },
  {
    name: 'Pointili',
    description: 'A CRM app',
    link: 'https://apps.apple.com/in/app/pointili/id6469307334',
  },
];
