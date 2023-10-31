import React, { FC, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
} from '@/redux/cart/cartSlice';
import CartForm from '@/components/CartForm/CartForm';
import CartListItem from '@/components/CartListItem/CartListItem';
import Image from 'next/image';
import FinalModal from '@/components/FinalModal/FinalModal';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import css from '../styles/Cart.module.scss';
import Head from 'next/head';

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
                <ul>
                  {filledCart.map(data => {
                    return (
                      <CartListItem
                        deleteCartItem={deleteCartItem}
                        key={nanoid()}
                        data={data}
                      />
                    );
                  })}
                </ul>
                <CartForm openModal={openModal} />
              </>
            ) : (
              <div className={css.emptyCart}>
                <Image
                  src={'/empty.png'}
                  alt="empty"
                  width={236}
                  height={257}
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
