import Link from '@components/Link';

export default function Footer() {
  return (
    <div className="pb-4">
      <Link href="https://github.com/Mikkel-T/matematik" text="Open source" />{' '}
      projekt lavet af <Link href="https://mikkel-t.com" text="Mikkel Tønder" />
      <div className="md:w-1/2 w-3/4 m-auto text-xs">
        Selvom programmet bliver testet ofte, er der stadig en meget lille
        chance for at det kan give forkerte resultater i specifikke situationer.
        Jeg gør alt hvad jeg kan for hele tiden at finde de situationer og fikse
        fejlene, men hvis et resultat ser forkert ud, så regn det efter selv for
        at være sikker.
        <br />
        Hvis du finder en fejl, må du meget gerne rapportere den{' '}
        <Link
          href="https://github.com/Mikkel-T/matematik/issues/new"
          text="her"
        />
        .
      </div>
    </div>
  );
}
