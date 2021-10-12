import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="da-DK">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <script
            async
            defer
            data-website-id="95590257-ede5-432a-b140-a1e943ce3f33"
            src="https://analytics.mikkel-t.com/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
