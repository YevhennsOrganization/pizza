import React, { FC, useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';
import Loader from '@/components/Loader/Loader';
import { getItems } from '@/api/getItems';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drinks: FC = ({ drinks }) => {
  const [currentDrink, setCurrentDrink] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [drinksAll, setDrinksAll] = useState<TChosenGood[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(drinks);

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
      // setOpen(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getItems('drinks')
      .then(data => setDrinksAll(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Pizza - drinks</title>
      </Head>
      <Section>
        <Container>
          <Heading>Напої</Heading>
          {isLoading && <Loader />}
          <GoodsList
            data={drinksAll}
            getCurrentItem={getCurrentDrink}
            getCurrentDrink1={getCurrentDrink1}
            currentItem={currentDrink}
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
