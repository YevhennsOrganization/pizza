import React, { FC, useEffect } from 'react';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import ProductsList from '@/components/productsList/ProductsList';
import Loader from '@/components/Loader/Loader';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getIsLoading, getPizzas } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';

const Pizzas: FC = () => {
  const pizzas = useAppSelector(getPizzas);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pizzas.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, pizzas]);

  return (
    <>
      <Head>
        <title>Pizza - pizzas</title>
      </Head>
      <Section>
        <Container>
          <Heading>Піца</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <ProductsList data={pizzas} />
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};
export default Pizzas;
