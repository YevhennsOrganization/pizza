import React, { useState } from 'react';
import drinks from '../data/drinks.json';
import DrinksList from '@/components/goodsList/DrinksList';
import Heading from '@/components/heading/Heading';
import ChosenDrink from '@/components/chosenItem/ChosenDrink';
import { Container } from '@/components/container/Container';
import { Section } from '@/components/section/Section';

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
        <Heading heading={'Напої'} />
        <DrinksList data={drinks} getCurrentItem={getCurrentDrink} />
        {open && (
          <ChosenDrink
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
