import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';
import { getItems } from '@/api/getItems';

const Drinks: React.FC = () => {
  const [currentDrink, setCurrentDrink] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [drinksAll, setDrinksAll] = useState<TChosenGood[]>([]);

  const handleClose = () => setOpen(false);

  const getCurrentDrink = (_id: string) => {
    const chosenDrink = drinksAll.find(item => item._id === _id);
    if (chosenDrink) {
      setCurrentDrink(chosenDrink);
      setOpen(true);
    }
  };

  useEffect(() => {
    getItems('drinks').then(data => setDrinksAll(data));
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Напої</Heading>
        <GoodsList data={drinksAll} getCurrentItem={getCurrentDrink} />
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
