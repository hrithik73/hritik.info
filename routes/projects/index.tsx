import IconBrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx';
import IconExternalLink from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/external-link.tsx';
import { Container } from '../../components/Container.tsx';
import { projects } from '../../data/site.ts';
import Divider from '../../components/Divider.tsx';

interface IProjectCardProps {
  title: string;
  githubLink: string;
  link: string;
  imgSrc: string | undefined;
  description: string;
  techStack: string;
}

const ProjectCard = ({
  title,
  githubLink,
  link,
  imgSrc,
  description,
  techStack,
}: IProjectCardProps) => {
  return (
    <div class='flex flex-col h-50 m-10 border-gray-800 border-1 rounded-md items-center justify-center cursor-pointer max-w-md'>
      <div class='flex flex-col items-center justify-center m-2 '>
        <img
          class='h-40 w-40 object-contain rounded-md bg-gray-800'
          src={imgSrc}
          alt='project card image'
        />
        <p class='font-bold text-lg hover:underline my-2'>{title}</p>
        <p class='text-sm text-center '>{description}</p>
      </div>

      <p class='text-xs text-red-500'>{techStack}</p>

      <div class='flex flex-row gap-2 m-3'>
        <a target='_blank' rel='noreferrer' href={githubLink}>
          <IconBrandGithub className='hover:underline' />
        </a>
        <a target='_blank' rel='noreferrer' href={link}>
          <IconExternalLink />
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <main>
      <Container>
        <h1 class='text-3xl'>Projects</h1>
        <p class='text-sm pt-2'>Personal Projects i have created.</p>
        <Divider />
        <div class='grid grid-cols-1 sm:grid-cols-2'>
          {projects.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                link={item.link}
                githubLink={item.github}
                imgSrc={item.imgSrc}
                description={item.description}
                techStack={item.techStack}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
}
