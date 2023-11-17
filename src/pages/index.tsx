import React, { FC } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import Loader from '@/components/common/Loader/Loader';
import { useAppSelector } from '@/redux/hooks';
import { getIsLoading, getPromotions } from '@/redux/products/productsSlice';
import CarouselComponent from '@/components/CarouselComponent/CarouselComponent';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../styles/Index.module.scss';

export const Home: FC = () => {
  const promotionProducts = useAppSelector(getPromotions);
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper title="Nostra pizza - Новинки">
      <>
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
      </>
    </PagesWrapper>
  );
};

export default Home;
