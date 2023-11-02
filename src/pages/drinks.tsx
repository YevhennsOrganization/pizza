import React, { FC, useEffect } from 'react';
import Head from 'next/head';

import Heading from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import ProductsList from '@/components/ProductsList/ProductsList';
import Loader from '@/components/Loader/Loader';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getDrinks, getIsLoading } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drinks: FC = () => {
  const drinks = useAppSelector(getDrinks);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (drinks.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, drinks]);

  return (
    <>
      <Head>
        <title>Pizza - drinks</title>
      </Head>
      <Section>
        <Container>
          <Heading>Напої</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <ProductsList data={drinks} />
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Drinks;
