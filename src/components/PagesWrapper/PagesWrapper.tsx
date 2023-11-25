import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import Error500 from '@/components/errors/Error500/Error500';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import 'react-toastify/dist/ReactToastify.css';

interface Props extends PropsWithChildren {
  title: string;
}
export const PagesWrapper: FC<Props> = ({ title, children }) => {
  const is500Error = useFetchProducts();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Найсмачніша піца в Дніпрі!"
          key="desc"
        />
        <meta name="og:description" content="Найсмачніша піца в Дніпрі" />
        <meta content="Nostra Pizza, Дніпро" property="og:title" />
        <meta
          content="де з'їсти піцу, закуски, напої, смачна піца, Nostra Pizza, Дніпропетровська область, Дніпро"
          name="keywords"
        />
        <title>{title}</title>
      </Head>
      <Section>
        <Container>{is500Error ? <Error500 /> : <>{children}</>}</Container>
      </Section>
    </>
  );
};

export default PagesWrapper;
