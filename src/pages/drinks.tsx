import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Heading from '@/components/basic/Heading/Heading';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import Loader from '@/components/common/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProductsAll, getIsLoading } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';
import { filterByCategory } from '@/helpers/filterByCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drinks: FC = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const drinks = filterByCategory(products, 'drinks');

  useEffect(() => {
    if (drinks.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, drinks]);

  return (
    <>
      <Head>
        <title>Nostra pizza - Напої</title>
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
