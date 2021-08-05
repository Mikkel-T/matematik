import { ArrowSmLeftIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
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
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="float-right"
      >
        {theme === 'dark' && <SunIcon className="h-6 w-6 m-1 sunicon" />}
        {theme === 'light' && <MoonIcon className="h-6 w-6 m-1 moonicon" />}
      </button>
    </div>
  );
}
