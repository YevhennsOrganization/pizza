import React, { FC } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import ProductsList from '@/modules/Products/ProductsList';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import LoaderModal from '@/UI/common/LoaderModal/LoaderModal';
import { useAppSelector } from '@/redux/hooks';
import { getProductsAll, getIsLoading } from '@/redux/products/productsSlice';
import { filterByCategory } from '@/helpers/filterByCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drinks: FC = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const drinks = filterByCategory(products, 'drinks');

  return (
    <PagesWrapper title="Nostra pizza - Напої">
      <Heading>Напої</Heading>
      {isLoading && <LoaderModal />}
      <ProductsList data={drinks} />
      <ToastContainer />
    </PagesWrapper>
  );
};

export default Drinks;
