import React, { FC } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import Loader from '@/components/common/Loader/Loader';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
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
    <PagesWrapper title="Nostra pizza - Піца">
      <>
        <Heading>Піца</Heading>
        <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
        <ProductsList data={pizzas} />
        <ToastContainer />
      </>
    </PagesWrapper>
  );
};
export default Pizzas;
