import { ArrowSmLeftIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      {router.pathname !== '/' && (
        <Link href={`${router.pathname}/..`}>
          <a className="hover:border-current dark:text-nord8 text-nord10 ml-1 border-b border-transparent">
            <ArrowSmLeftIcon className="h-5 w-5 inline-block align-middle mr-1.5" />
            <span className="inline-block align-middle">Til forrige side</span>
          </a>
        </Link>
      )}
      {resolvedTheme && (
        <div
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="absolute right-0 w-12 m-2 h-6 ml-2 rounded-full items-center inline-flex cursor-pointer bg-nord10 toggle"
        >
          <div className="h-5 w-5 rounded-full transition-all dark:translate-x-6 duration-300 bg-nord6 ml-0.5 ring-nord11 absolute" />
          <SunIcon className="h-5 w-5 text-nord13 dark:text-nord1 absolute translate-x-1 -ml-0.5 transition-colors duration-300" />
          <MoonIcon className="h-5 w-5 text-nord1 dark:text-nord13 absolute translate-x-6 ml-0.5 transition-colors duration-300" />
        </div>
      )}
    </div>
  );
}
