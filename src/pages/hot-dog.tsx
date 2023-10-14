import React, { useState } from 'react';
import Heading from '@/components/Heading/Heading';
import hotDog from '../data/hotDog.json';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';

const HotDog: React.FC = () => {
  const [currentHotDog, setCurrentHotDog] = useState({} as TChosenGood);
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
    <Section>
      <Container>
        <Heading>Хот-доги</Heading>
        <GoodsList data={hotDog} getCurrentItem={getCurrentHotDog} />
        {open && (
          <ChosenItem
            open={open}
            handleClose={handleClose}
            currentItem={currentHotDog}
          />
        )}
      </Container>
    </Section>
  );
};

export default HotDog;
