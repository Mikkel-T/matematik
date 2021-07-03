import { ArrowSmLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== '/' && (
        <Link href={`${router.pathname}/..`}>
          <a className="hover:text-nord10 text-nord8 ml-1">
            <ArrowSmLeftIcon className="h-5 w-5 inline-block align-middle mr-1.5" />
            <span className="inline-block align-middle">Til forrige side</span>
          </a>
        </Link>
      )}
    </div>
  );
}
