import React from 'react';

import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#474FEC" />
          <meta
            name="description"
            content="Oskar Borkenhagens Developer Page - Portfolio, Skills, and more."
          />
          <link rel="apple-touch-icon" href="/assets/images/code.svg" />
          <link rel="manifest" href="/manifest.json" />

          <meta content="https://ostabo.com" property="og:url" />
          <meta content="website" property="og:type" />
          <meta content="Ostabo Developer Page" property="og:title" />
          <meta
            content="Developer page of Oskar Borkenhagen - Software Engineer"
            property="og:description"
          />
          <meta content="/logo512.png" property="og:image:secure_url" />
          <meta content="/logo512.png" property="og:image" />
          <meta content="512" property="og:image:width" />
          <meta content="512" property="og:image:height" />
          <meta content="en_US" property="og:locale" />
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
