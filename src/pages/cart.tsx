import React, { FC, useEffect, useState } from 'react';
import Heading from '@/components/basic/Heading/Heading';
import CartForm from '@/components/cart/CartForm/CartForm';
import FinalModal from '@/components/FinalModal/FinalModal';
import CartList from '@/components/cart/CartList/CartList';
import Empty from '@/components/Empty/Empty';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilledCart,
  deleteItem,
  deleteAllItems,
} from '@/redux/cart/cartSlice';
import css from '../styles/pages/Cart.module.scss';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);

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

  useEffect(() => {
    const result = filledCart
      .map((element: { totalPrice: number }) => element.totalPrice)
      .reduce((acc: number, val: number) => acc + val, 0);
    setTotalPayment(result);
  }, [filledCart]);

  const order: TOrdered = filledCart.map(item => {
    return {
      title: item.title,
      quantity: item.quantity,
    };
  });

  return (
    <PagesWrapper title="Nostra pizza - Кошик">
      <div className={css.cartWrapper}>
        <Heading>Кошик</Heading>
        {filledCart.length > 0 ? (
          <>
            <CartList
              filledCart={filledCart}
              deleteCartItem={deleteCartItem}
              deleteAllProducts={deleteAllProducts}
            />
            <CartForm
              openModal={openModal}
              totalPayment={totalPayment}
              order={order}
            />
          </>
        ) : (
          <Empty text={'Кошик порожній!'} />
        )}
        {open && <FinalModal finalAction={deleteAllProducts} />}
      </div>
    </PagesWrapper>
  );
};

export default Cart;
