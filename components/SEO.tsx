import { NextSeoProps, NextSeo } from 'next-seo';

export default function SEO(props: NextSeoProps) {
  return (
    <NextSeo {...props} openGraph={{ type: 'website', locale: 'da_DK' }} />
  );
}
