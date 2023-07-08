import { site } from '../data/site.ts';
import { Container } from './Container.tsx';

export function Footer() {
  return (
    <footer class='w-full pt-10 pb-4'>
      <Container>
        <div class='text-center'>
          <p>
            &copy; {new Date().getFullYear()} {site.copyrightName} •{' '}
            <a class='hover:text-underline' href={site.viewSourceUrl}>
              View Source
            </a>
          </p>
        </div>
        {/* This is a plug for the creator of this template, you can delete the code or disable it in the site settings */}
      </Container>
    </footer>
  );
}
