import React, { useState } from 'react';
import pizza from '../data/pizza.json';
import PizzaList from '@/components/goodsList/PizzaList';
import Heading from '@/components/heading/Heading';
import ChosenPizza from '@/components/chosenItem/ChosenPizza';
import { Container } from '@/components/container/Container';
import { Section } from '@/components/section/Section';

const Pizza: React.FC = () => {
  const [currentPizza, setCurrentPizza] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const getCurrentPizza = (_id: string) => {
    const chosenPizza = pizza.find(item => item._id === _id);
    if (chosenPizza) {
      setCurrentPizza(chosenPizza);
      setOpen(true);
    }
  };

  return (
    <Section>
      <Container>
        <Heading>Піци</Heading>
        <PizzaList data={pizza} getCurrentItem={getCurrentPizza} />
        {open && (
          <ChosenPizza
            open={open}
            handleClose={handleClose}
            currentItem={currentPizza}
          />
        )}
      </Container>
    </Section>
  );
};

export default Pizza;
