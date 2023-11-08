import React, { FC, useState } from 'react';
import Head from 'next/head';
import Heading from '@/components/basic/Heading/Heading';
import CartForm from '@/components/CartForm/CartForm';
import FinalModal from '@/components/FinalModal/FinalModal';
import Container from '@/components/common/Container/Container';
import Section from '@/components/common/Section/Section';
import CartList from '@/components/CartList/CartList';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
} from '@/redux/cart/cartSlice';
import css from '../styles/Cart.module.scss';
import Empty from '@/components/Empty/Empty';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const openModal = () => {
    setOpen(true);
  };
  const deleteAllProducts = () => {
    dispatch(deleteAllItems());
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Nostra pizza - Кошик</title>
      </Head>
      <Section>
        <Container>
          <div className={css.cartWrapper}>
            <Heading>Кошик</Heading>
            {filledCart.length > 0 ? (
              <>
                <CartList
                  filledCart={filledCart}
                  deleteCartItem={deleteCartItem}
                  deleteAllProducts={deleteAllProducts}
                />
                <CartForm openModal={openModal} />
              </>
            ) : (
              <Empty text={'Кошик порожній!'} />
            )}
            {open && <FinalModal open={open} finalAction={deleteAllProducts} />}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Cart;
