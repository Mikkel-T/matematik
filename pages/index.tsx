import { frontPage } from '@utils/pages';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Matematik beregnere"
        description="En hjemmeside med mange forskellige matematiske værktøjer"
      />
      <div>
        <h1 className="text-4xl py-3">Beregnere</h1>
        <div className="grid gap-4 p-3 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {frontPage.map((e, i) => (
            <Link href={e.path} key={i}>
              <a className="flex hover:scale-105 transform transition duration-500 items-center justify-center text-center bg-nord3 rounded-xl h-20 border-2 border-nord10 px-2">
                {e.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
