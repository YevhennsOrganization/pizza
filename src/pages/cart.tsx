import React, { FC, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Heading from '@/components/Heading/Heading';
import CartForm from '@/components/CartForm/CartForm';
import FinalModal from '@/components/FinalModal/FinalModal';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
} from '@/redux/cart/cartSlice';

import css from '../styles/Cart.module.scss';
import CartList from '@/components/CartList/CartList';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const openModal = () => {
    setOpen(!open);
  };
  const finalAction = () => {
    dispatch(deleteAllItems());
    setOpen(!open);
  };

  return (
    <>
      <Head>
        <title>Pizza - cart</title>
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
                />
                <CartForm openModal={openModal} />
              </>
            ) : (
              <div className={css.emptyCart}>
                <Image
                  src={'/empty.png'}
                  alt="empty"
                  width={236}
                  height={257}
                  priority={true}
                />
                <p>Кошик порожній!</p>
              </div>
            )}
            {open && <FinalModal open={open} finalAction={finalAction} />}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Cart;
