import { ListProps } from '@interfaces/index';
import Link from 'next/link';

export default function List({ list, title }: ListProps) {
  return (
    <>
      <h1 className="py-3 text-4xl">{title}</h1>

      <div className="sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-1 gap-4 p-3 m-auto">
        {list.map((e, i) => (
          <Link href={e.path} key={i}>
            <a className="hover:scale-105 bg-nord3 rounded-xl border-nord10 flex items-center justify-center h-20 px-2 text-center transition duration-500 transform border-2">
              {e.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
