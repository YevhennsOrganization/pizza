import React, { FC, useEffect, useState } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import CartForm from '@/components/CartForm/CartForm';
import FinalModal from '@/components/FinalModal/FinalModal';
import CartList from '@/components/cart/CartList/CartList';
import Empty from '@/components/Empty/Empty';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
  getCustomerInfo,
  getIsLoading,
  getError,
} from '@/redux/cart/cartSlice';
import css from '../styles/pages/Cart.module.scss';
import CartContent from '@/modules/CartContent/CartContent';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);
  const info = useAppSelector(getCustomerInfo);
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

  const order: TOrdered = filledCart.map(item => {
    return {
      title: item.title,
      quantity: item.quantity,
    };
  });

  useEffect(() => {
    const result = filledCart
      .map((element: { totalPrice: number }) => element.totalPrice)
      .reduce((acc: number, val: number) => acc + val, 0);
    setTotalPayment(result);
  }, [filledCart]);

  return (
    <PagesWrapper title="Nostra pizza - Кошик">
      <div className={css.cartWrapper}>
        <Heading>Кошик</Heading>
        <CartContent
          filledCart={filledCart}
          deleteCartItem={deleteCartItem}
          deleteAllProducts={deleteAllProducts}
          openModal={openModal}
          totalPayment={totalPayment}
          order={order}
        />
        {open && (
          <FinalModal
            finalAction={deleteAllProducts}
            filledCart={filledCart}
            info={info}
            isLoading={isLoading}
            err={err}
          />
        )}
      </div>
    </PagesWrapper>
  );
};

export default Cart;
