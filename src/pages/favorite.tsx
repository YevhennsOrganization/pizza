import React, { FC } from 'react';
import Head from 'next/head';

import Heading from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import Loader from '@/components/Loader/Loader';

import { getIsLoading } from '@/redux/products/productsSlice';
import { useAppSelector } from '@/redux/hooks';

const Favorite: FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  return (
    <>
      <Head>
        <title>Nostra pizza - Улюблене</title>
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
