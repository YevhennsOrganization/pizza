import React, { FC, useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import ProductsList from '@/components/ProductsList/ProductsList';
import Loader from '@/components/Loader/Loader';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getIsLoading, getPizzas } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';

const Pizzas: FC = () => {
  const [currentPizza, setCurrentPizza] = useState({} as TChosenProduct);

  const pizzas = useAppSelector(getPizzas);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const getCurrentPizza = (_id: string) => {
    const chosenPizza = pizzas.find(item => item._id === _id);
    if (chosenPizza) {
      setCurrentPizza(chosenPizza);
    }
  };

  useEffect(() => {
    if (pizzas.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, pizzas]);

  return (
    <>
      <Head>
        <title>Pizza - pizzas</title>
      </Head>
      <Section>
        <Container>
          <Heading>Піци</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <ProductsList
            data={pizzas}
            getCurrentItem={getCurrentPizza}
            currentItem={currentPizza}
          />
          {/* {open && (
            <ChosenItem
              open={open}
              handleClose={handleClose}
              currentItem={currentPizza}
            />
          )} */}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};
export default Pizzas;
