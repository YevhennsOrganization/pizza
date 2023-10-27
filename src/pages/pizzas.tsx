import React, { useEffect, useState } from 'react';
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

const Pizzas: React.FC = () => {
  const [currentPizza, setCurrentPizza] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [pizzasAll, setPizzasAll] = useState<TChosenGood[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setOpen(false);

  const getCurrentPizza = (_id: string) => {
    const chosenPizza = pizzasAll.find(item => item._id === _id);
    if (chosenPizza) {
      setCurrentPizza(chosenPizza);
      setOpen(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getItems('pizzas')
      .then(data => setPizzasAll(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Pizza - pizzas</title>
      </Head>
      <Section>
        <Container>
          <Heading>Піци</Heading>
          {isLoading && <Loader />}
          <GoodsList data={pizzasAll} getCurrentItem={getCurrentPizza} />
          {open && (
            <ChosenItem
              open={open}
              handleClose={handleClose}
              currentItem={currentPizza}
            />
          )}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};
export default Pizzas;
