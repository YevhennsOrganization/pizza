import React, { useState } from 'react';
import pizza from '../data/pizza.json';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';

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
        <GoodsList data={pizza} getCurrentItem={getCurrentPizza} />
        {open && (
          <ChosenItem
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
