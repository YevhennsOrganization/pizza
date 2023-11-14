import React, { FC } from 'react';
import Head from 'next/head';
import Heading from '@/components/basic/Heading/Heading';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import Loader from '@/components/common/Loader/Loader';
import Empty from '@/components/Empty/Empty';
import { getFavorites, getIsLoading } from '@/redux/products/productsSlice';
import { useAppSelector } from '@/redux/hooks';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorite: FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <>
      <Head>
        <title>Nostra pizza - Улюблене</title>
      </Head>
      <Section>
        <Container>
          <Heading>Улюблене</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          {favoriteProducts.length > 0 ? (
            <ProductsList data={favoriteProducts} />
          ) : (
            <Empty text={'Тут нічого немає!'} />
          )}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Favorite;
