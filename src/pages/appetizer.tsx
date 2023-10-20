import React, {useState} from 'react';
import Heading from '@/components/Heading/Heading';
import hotDog from '../data/hotDog.json';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import {Container} from '@/components/Container/Container';
import {Section} from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';

const Appetizer: React.FC = () => {
  const [currentAppetizer, setCurrentAppetizer] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const getCurrentAppetizer = (_id: string) => {
    const chosenHotDog = hotDog.find(item => item._id === _id);
    if (chosenHotDog) {
      setCurrentAppetizer(chosenHotDog);
      setOpen(true);
    }
  };

  return (
    <Section>
      <Container>
        <Heading>Хот-доги</Heading>
        <GoodsList data={hotDog} getCurrentItem={getCurrentAppetizer}/>
        {open && (
          <ChosenItem
            open={open}
            handleClose={handleClose}
            currentItem={currentAppetizer}
          />
        )}
      </Container>
    </Section>
  );
};

export default Appetizer;
