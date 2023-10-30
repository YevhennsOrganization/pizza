import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import ChosenItem from '@/components/ChosenItem/ChosenItem';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import GoodsList from '@/components/GoodsList/GoodsList';
import Loader from '@/components/Loader/Loader';
import { getItems } from '@/api/getItems';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAppetizers, getIsLoading } from '@/redux/products/productsSlice';
import { getProducts } from '@/redux/products/productsOperations';

const Appetizers: React.FC = () => {
  const [currentAppetizer, setCurrentAppetizer] = useState({} as TChosenGood);
  const [open, setOpen] = useState(false);
  const [appetizersAll, setAppetizersAll] = useState<TChosenGood[]>([]);

  const appetizers = useAppSelector(getAppetizers);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const handleClose = () => setOpen(false);

  const getCurrentAppetizer = (_id: string) => {
    const chosenAppetizer = appetizersAll.find(item => item._id === _id);
    if (chosenAppetizer) {
      setCurrentAppetizer(chosenAppetizer);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (appetizersAll.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, appetizersAll]);

  useEffect(() => {
    setAppetizersAll(appetizers);
  }, [appetizers]);

  return (
    <>
      <Head>
        <title>Pizza - appetizers</title>
      </Head>
      <Section>
        <Container>
          <Heading>Закуски</Heading>
          {isLoading && <Loader />}
          <GoodsList
            data={appetizersAll}
            getCurrentItem={getCurrentAppetizer}
          />
          {open && (
            <ChosenItem
              open={open}
              handleClose={handleClose}
              currentItem={currentAppetizer}
            />
          )}
          <ToastContainer />
        </Container>
      </Section>
    </>
  );
};

export default Appetizers;
