import React, { FC } from 'react';
import Empty from '@/components/Empty/Empty';
import CartForm from './CartForm/CartForm';
import CartList from './CartList/CartList';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { deleteItem, getFilledCart } from '@/redux/cart/cartSlice';

interface Props {
  deleteAllProducts: () => void;
  openModal: () => void;
}

const CartContent: FC<Props> = ({ deleteAllProducts, openModal }) => {
  const filledCart = useAppSelector(getFilledCart);

  const order: TOrdered = filledCart.map(item => {
    return {
      title: item.title,
      quantity: item.quantity,
    };
  });

  const dispatch = useAppDispatch();

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      {filledCart.length > 0 ? (
        <>
          <CartList
            filledCart={filledCart}
            deleteCartItem={deleteCartItem}
            deleteAllProducts={deleteAllProducts}
          />
          <CartForm openModal={openModal} order={order} />
        </>
      ) : (
        <Empty text={'Кошик порожній!'} />
      )}
    </>
  );
};

export default CartContent;
