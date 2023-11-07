import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Heading from '@/components/basic/Heading/Heading';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import ProductsList from '@/components/ProductsList/ProductsList';
import Loader from '@/components/common/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getIsLoading, getProductsAll } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';
import { filterByCategory } from '@/helpers/filterByCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appetizers: FC = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const appetizers = filterByCategory(products, 'appetizers');

  useEffect(() => {
    if (appetizers.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, appetizers]);

  return (
    <>
      <Head>
        <title>Nostra pizza - Закуски</title>
      </Head>
      <Section>
        <Container>
          <Heading>Закуски</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <ProductsList data={appetizers} />
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Appetizers;
