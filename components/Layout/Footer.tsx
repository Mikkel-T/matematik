import Link from 'next/link';

export default function Footer() {
  return (
    <div className="pb-4">
      <Link href="https://github.com/Mikkel-T/matematik">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-nord8 hover:text-nord10"
        >
          Open source
        </a>
      </Link>{' '}
      projekt lavet af{' '}
      <Link href="https://mikkel-t.com">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-nord8 hover:text-nord10"
        >
          Mikkel Tønder
        </a>
      </Link>
      <div className="text-xs w-3/4 md:w-1/2 m-auto">
        Selvom programmet bliver testet ofte, er der stadig en meget lille
        chance for at det kan give forkerte resultater i specifikke situationer.
        Jeg gør alt hvad jeg kan for hele tiden at finde de situationer og fikse
        fejlene, men hvis et resultat ser forkert ud, så regn det efter selv for
        at være sikker.
      </div>
    </div>
  );
}
