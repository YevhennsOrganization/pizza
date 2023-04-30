import { useState } from 'react';
import drinks from '../data/drinks.json';
import DrinksList from '@/components/goodsList/DrinksList';
import Heading from '@/components/heading/Heading';
import ChosenDrink from '@/components/chosenItem/ChosenDrink';

type TypeChosenItem = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
};

const Drinks = () => {
  const [currentDrink, setCurrentDrink] = useState({} as TypeChosenItem);
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
    <>
      <main>
        <Heading heading={'Напої'} />
        <DrinksList data={drinks} getCurrentItem={getCurrentDrink} />
        {open && (
          <ChosenDrink
            open={open}
            handleClose={handleClose}
            currentItem={currentDrink}
          />
        )}
      </main>
    </>
  );
};

export default Drinks;
