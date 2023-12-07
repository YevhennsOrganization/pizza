import React, { FC, useState } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import CartContent from '@/modules/Cart/CartContent';
import FinalModal from '@/components/FinalModal/FinalModal';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
  getIsLoading,
  getError,
  getOrderSum,
} from '@/redux/cart/cartSlice';
import css from '../styles/pages/Cart.module.scss';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);
  const sum = useAppSelector(getOrderSum);
  const isLoading = useAppSelector(getIsLoading);
  const err = useAppSelector(getError);

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
    <PagesWrapper title="Nostra pizza - Кошик">
      <div className={css.cartWrapper}>
        <Heading>Кошик</Heading>
        <CartContent
          filledCart={filledCart}
          deleteCartItem={deleteCartItem}
          deleteAllProducts={deleteAllProducts}
          openModal={openModal}
        />
        {open && (
          <FinalModal
            finalAction={deleteAllProducts}
            filledCart={filledCart}
            sum={sum}
            isLoading={isLoading}
            err={err}
          />
        )}
      </div>
    </PagesWrapper>
  );
};

export default Cart;
