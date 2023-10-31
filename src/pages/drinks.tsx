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
import { getDrinks, getIsLoading } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';

const Drinks: FC = () => {
  const [currentDrink, setCurrentDrink] = useState({} as TChosenProduct);
  const [open, setOpen] = useState(false);
  const [drinksAll, setDrinksAll] = useState<TChosenProduct[]>([]);

  const drinks = useAppSelector(getDrinks);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const handleClose = () => setOpen(false);

  const getCurrentDrink = (_id: string) => {
    const chosenDrink = drinksAll.find(item => item._id === _id);
    if (chosenDrink) {
      setCurrentDrink(chosenDrink);
      setOpen(true);
    }
  };

  const getCurrentDrink1 = (_id: string) => {
    const chosenDrink = drinksAll.find(item => item._id === _id);
    if (chosenDrink) {
      setCurrentDrink(chosenDrink);
    }
  };

  useEffect(() => {
    if (drinksAll.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, drinksAll]);

  useEffect(() => {
    setDrinksAll(drinks);
  }, [drinks]);

  return (
    <>
      <Head>
        <title>Pizza - drinks</title>
      </Head>
      <Section>
        <Container>
          <Heading>Напої</Heading>
          <div style={{ height: '50px' }}>{isLoading && <Loader />}</div>
          <ProductsList
            data={drinksAll}
            getCurrentItem={getCurrentDrink}
            // getCurrentDrink1={getCurrentDrink1}
            // currentItem={currentDrink}
          />
          {open && (
            <ChosenItem
              open={open}
              handleClose={handleClose}
              currentItem={currentDrink}
            />
          )}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Drinks;
