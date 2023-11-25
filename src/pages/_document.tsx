import React, { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html lang="uk">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
