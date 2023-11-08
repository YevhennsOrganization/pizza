import React, { FC, HTMLProps } from 'react';
import { nanoid } from 'nanoid';
import CartListItem from '../CartListItem/CartListItem';
import css from './CartList.module.scss';

interface Props extends HTMLProps<HTMLUListElement> {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
}

const CartList: FC<Props> = ({ filledCart, deleteCartItem }) => {
  return (
    <div className={css.cartList}>
      {filledCart.map(data => {
        return (
          <CartListItem
            key={nanoid()}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
    </div>
  );
};

export default CartList;
