import { useState } from 'react';
import pizza from '../data/pizza.json';
import PizzaList from '@/components/goodsList/PizzaList';
import Heading from '@/components/heading/Heading';
import ChosenPizza from '@/components/chosenItem/ChosenPizza';

type TypeChosenItem = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
};

const Pizza = () => {
  const [currentPizza, setCurrentPizza] = useState({} as TypeChosenItem);
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
    <>
      <main>
        <Heading heading={'Піци'} />
        <PizzaList data={pizza} getCurrentItem={getCurrentPizza} />
        {open && (
          <ChosenPizza
            open={open}
            handleClose={handleClose}
            currentItem={currentPizza}
          />
        )}
      </main>
    </>
  );
};

export default Pizza;
