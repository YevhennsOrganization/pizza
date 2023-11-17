import React, { FC } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import Loader from '@/components/common/Loader/Loader';
import ProductsPageWrapper from '@/components/ProductsPageWrapper/ProductsPageWrapper';
import { useAppSelector } from '@/redux/hooks';
import { getIsLoading, getProductsAll } from '@/redux/products/productsSlice';
import { filterByCategory } from '@/helpers/filterByCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pizzas: FC = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const pizzas = filterByCategory(products, 'pizzas');

  return (
    <ProductsPageWrapper title="Nostra pizza - Піца">
      <>
        <Heading>Піца</Heading>
        <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
        <ProductsList data={pizzas} />
        <ToastContainer />
      </>
    </ProductsPageWrapper>
  );
};
export default Pizzas;
