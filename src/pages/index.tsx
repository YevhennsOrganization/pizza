import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProducts } from '@/redux/products/productsOperations';
import { getIsLoading } from '@/redux/products/productsSlice';
import Loader from '@/components/Loader/Loader';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Pizza - news</title>
      </Head>
      <Section>
        <Container>
          <Heading>Новинки</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <p>Тут може бути Ваша реклама</p>
        </Container>
      </Section>
    </>
  );
};

export default Home;
