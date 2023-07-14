import { site } from '../data/site.ts';
import IconLoaderQuarter from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/loader-quarter.tsx';

export function Header() {
  return (
    <header class='px-3 py-3 bg-black h-16 flex items-center justify-between p-10'>
      <div class='px-4 max-w-screen-md'>
        <a
          href='/'
          class='text-xl font-bold text-white flex flex-row justify-center items-center'
        >
          <IconLoaderQuarter color='red' />
          HS
        </a>
      </div>
      <div class='flex'>
        {site.navLinks.map((item) => {
          return (
            <a
              className='text-sm font-bold text-white hover:text-underline mx-2'
              href={item.link}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
