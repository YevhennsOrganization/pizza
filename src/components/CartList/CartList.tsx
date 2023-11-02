import React, { FC } from 'react';
import { nanoid } from 'nanoid';

import CartListItem from '../CartListItem/CartListItem';

import css from './CartList.module.scss';

interface Props {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
}

const CartList: FC<Props> = ({ filledCart, deleteCartItem }) => {
  return (
    <ul className={css.cartList}>
      {filledCart.map(data => {
        return (
          <CartListItem
            key={nanoid()}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
    </ul>
  );
};

export default CartList;
