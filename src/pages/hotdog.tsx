import React, { useState } from 'react';
import HotDogList from '@/components/goodsList/HotDogList';
import Heading from '@/components/heading/Heading';
import hotDog from '../data/hotDog.json';
import ChosenHotDog from '@/components/chosenItem/ChosenHotDog';
import { Container } from '@/components/container/Container';
import { Section } from '@/components/section/Section';

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
        <Heading heading={'Хот-доги'} />
        <HotDogList data={hotDog} getCurrentItem={getCurrentHotDog} />
        {open && (
          <ChosenHotDog
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
