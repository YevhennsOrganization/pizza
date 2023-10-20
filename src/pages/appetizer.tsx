import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';
import { getItems } from '@/api/getItems';

const Appetizer: React.FC = () => {
  const [currentAppetizer, setCurrentAppetizer] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [appetizersAll, setAppetizersAll] = useState<TChosenGood[]>([]);

  const handleClose = () => setOpen(false);

  const getCurrentAppetizer = (_id: string) => {
    const chosenHotDog = appetizersAll.find(item => item._id === _id);
    if (chosenHotDog) {
      setCurrentAppetizer(chosenHotDog);
      setOpen(true);
    }
  };

  useEffect(() => {
    getItems('appetizers').then(data => setAppetizersAll(data));
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Закуски</Heading>
        <GoodsList data={appetizersAll} getCurrentItem={getCurrentAppetizer} />
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
