import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Heading from '@/components/basic/Heading/Heading';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import Loader from '@/components/common/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProducts } from '@/redux/products/productsOperations';
import { getIsLoading, getPromotions } from '@/redux/products/productsSlice';
import CarouselComponent from '@/components/CarouselComponent/CarouselComponent';
import ProductsList from '@/components/ProductsList/ProductsList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../styles/Index.module.scss';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getIsLoading);
  const promotionProducts = useAppSelector(getPromotions);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Nostra pizza - Новинки</title>
      </Head>
      <Section>
        <Container>
          <Heading>Новинки</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          {!isLoading && (
            <>
              <CarouselComponent />
              <h2 className={css.heading}>Найпопулярніші позиції</h2>
              <ProductsList data={promotionProducts} />
            </>
          )}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Home;
