import React, { FC } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import Empty from '@/components/Empty/Empty';
import { getFavorites, getIsLoading } from '@/redux/products/productsSlice';
import { useAppSelector } from '@/redux/hooks';
import ProductsList from '@/modules/ProductsList/ProductsList';
import LoaderModal from '@/UI/common/LoaderModal/LoaderModal';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorite: FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper title="Nostra pizza - Улюблене">
      <Heading>Улюблене</Heading>
      {isLoading && <LoaderModal />}
      {favoriteProducts.length > 0 ? (
        <ProductsList data={favoriteProducts} />
      ) : (
        <Empty text={'Тут нічого немає!'} />
      )}
      <ToastContainer />
    </PagesWrapper>
  );
};

export default Favorite;
