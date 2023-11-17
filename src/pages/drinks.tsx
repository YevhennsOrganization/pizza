import React, { FC } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import Loader from '@/components/common/Loader/Loader';
import ProductsPageWrapper from '@/components/ProductsPageWrapper/ProductsPageWrapper';
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
    <ProductsPageWrapper title="Nostra pizza - Напої">
      <>
        <Heading>Напої</Heading>
        <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
        <ProductsList data={drinks} />
        <ToastContainer />
      </>
    </ProductsPageWrapper>
  );
};

export default Drinks;
