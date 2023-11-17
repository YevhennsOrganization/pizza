import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import Error500 from '@/components/errors/Error500';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  title: string;
  children: ReactNode;
}
export const PagesWrapper: FC<Props> = ({ title, children }) => {
  const is500Error = useFetchProducts();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Section>
        <Container>{is500Error ? <Error500 /> : <>{children}</>}</Container>
      </Section>
    </>
  );
};

export default PagesWrapper;
