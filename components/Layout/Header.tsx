import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/' && (
        <Link href="/">
          <a className="hover:text-nord10 text-nord8 mt-1 ml-2">
            <span>&#8592;</span> Til startsiden
          </a>
        </Link>
      )}
    </>
  );
}
