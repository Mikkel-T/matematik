import NextLink from 'next/link';

import { LinkProps } from '@interfaces/index';

export default function Link({ href, text }: LinkProps) {
  return (
    <NextLink href={href}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-nord8 text-nord10 hover:underline"
      >
        {text}
      </a>
    </NextLink>
  );
}
