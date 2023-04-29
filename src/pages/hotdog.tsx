import { useState } from 'react';
import HotDogList from '@/components/goodsList/HotDogList';
import Heading from '@/components/heading/Heading';
import hotDog from '../data/hotDog.json';
import ChosenHotDog from '@/components/chosenItem/ChosenHotDog';

type TypeChosenItem = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
};

const HotDog: React.FC = () => {
  const [currentHotDog, setCurrentHotDog] = useState({} as TypeChosenItem);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const getCurrentHotDog = (_id: string) => {
    const chosenHotDog = hotDog.find(item => item._id === _id);
    if (chosenHotDog) {
      setCurrentHotDog(chosenHotDog);
      setOpen(true);
    }
  };

  return (
    <>
      <main>
        <Heading heading={'Хот-доги'} />
        <HotDogList data={hotDog} getCurrentItem={getCurrentHotDog} />
        {open && (
          <ChosenHotDog
            open={open}
            handleClose={handleClose}
            currentItem={currentHotDog}
          />
        )}
      </main>
    </>
  );
};

export default HotDog;
