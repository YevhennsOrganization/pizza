import React, { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html lang="uk">
      <Head>
        <meta name="description" content="Найсмачніша піца в Дніпрі" />
        <meta name="og:description" content="Найсмачніша піца в Дніпрі" />
        <meta content="Nostra Pizza, Дніпро" property="og:title"></meta>
        <meta
          content="де з'їсти піцу, закуски, напої, смачна піца, Nostra Pizza, Дніпропетровська область, Дніпро"
          name="keywords"
        ></meta>

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
