import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';
import { getItems } from '@/api/getItems';

const Pizza: React.FC = () => {
  const [currentPizza, setCurrentPizza] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [pizzasAll, setPizzasAll] = useState<TChosenGood[]>([]);

  const handleClose = () => setOpen(false);

  const getCurrentPizza = (_id: string) => {
    const chosenPizza = pizzasAll.find(item => item._id === _id);
    if (chosenPizza) {
      setCurrentPizza(chosenPizza);
      setOpen(true);
    }
  };

  useEffect(() => {
    getItems('pizzas').then(data => setPizzasAll(data));
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Піци</Heading>
        <GoodsList data={pizzasAll} getCurrentItem={getCurrentPizza} />
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
