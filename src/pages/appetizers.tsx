import React, { FC } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import ProductsList from '@/modules/Products/ProductsList';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import LoaderModal from '@/UI/common/LoaderModal/LoaderModal';
import { useAppSelector } from '@/redux/hooks';
import { getIsLoading, getProductsAll } from '@/redux/products/productsSlice';
import { filterByCategory } from '@/helpers/filterByCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appetizers: FC = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const appetizers = filterByCategory(products, 'appetizers');

  return (
    <PagesWrapper title="Nostra pizza - Закуски">
      <Heading>Закуски</Heading>
      {isLoading && <LoaderModal />}
      <ProductsList data={appetizers} />
      <ToastContainer />
    </PagesWrapper>
  );
};

export default Appetizers;
