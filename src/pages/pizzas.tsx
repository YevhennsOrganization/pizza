import React, { FC } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import ProductsList from '@/components/products/ProductsList/ProductsList';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import LoaderModal from '@/components/common/LoaderModal/LoaderModal';
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
        {isLoading && <LoaderModal />}
        <ProductsList data={pizzas} />
        <ToastContainer />
      </>
    </PagesWrapper>
  );
};
export default Pizzas;
