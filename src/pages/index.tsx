import React, { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { useAppDispatch } from '@/redux/hooks';
import { getProducts } from '@/redux/products/productsOperations';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts);
  }, []);
  return (
    <>
      <Head>
        <title>Pizza - news</title>
      </Head>
      <Section>
        <Container>
          <Heading>Новинки</Heading>
          <p>Тут може бути Ваша реклама</p>
        </Container>
      </Section>
    </>
  );
};

export default Home;
