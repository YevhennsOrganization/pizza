import React, { FC } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import { useAppSelector } from '@/redux/hooks';
import { getIsLoading, getPromotions } from '@/redux/products/productsSlice';
import CarouselComponent from '@/components/CarouselComponent/CarouselComponent';
import ProductsList from '@/modules/ProductsList/ProductsList';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import LoaderModal from '@/UI/common/LoaderModal/LoaderModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../styles/pages/Index.module.scss';

export const Home: FC = () => {
  const promotionProducts = useAppSelector(getPromotions);
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper title="Nostra pizza - Новинки">
      <Heading>Новинки</Heading>
      {isLoading && <LoaderModal />}
      <CarouselComponent />
      <h2 className={css.heading}>Найпопулярніші позиції</h2>
      <ProductsList data={promotionProducts} />
      <ToastContainer />
    </PagesWrapper>
  );
};

export default Home;
