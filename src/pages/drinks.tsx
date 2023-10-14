import React, { useState } from 'react';
import drinks from '../data/drinks.json';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';

const Drinks: React.FC = () => {
  const [currentDrink, setCurrentDrink] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const getCurrentDrink = (_id: string) => {
    const chosenDrink = drinks.find(item => item._id === _id);
    if (chosenDrink) {
      setCurrentDrink(chosenDrink);
      setOpen(true);
    }
  };

  return (
    <Section>
      <Container>
        <Heading>Напої</Heading>
        <GoodsList data={drinks} getCurrentItem={getCurrentDrink} />
        {open && (
          <ChosenItem
            open={open}
            handleClose={handleClose}
            currentItem={currentDrink}
          />
        )}
      </Container>
    </Section>
  );
};

export default Drinks;
