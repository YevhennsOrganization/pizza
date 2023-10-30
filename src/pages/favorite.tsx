import React from 'react';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import Head from 'next/head';
import Loader from '@/components/Loader/Loader';
import { getIsLoading } from '@/redux/products/productsSlice';
import { useAppSelector } from '@/redux/hooks';

const Favorite: React.FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  return (
    <>
      <Head>
        <title>Pizza - favorite</title>
      </Head>
      <Section>
        <Container>
          <div>
            <Heading>Улюблене</Heading>
            <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
            <p>Сторінка в розробці</p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Favorite;
