import React, { FC, HTMLProps } from 'react';
import { nanoid } from 'nanoid';
import CartListItem from '../CartListItem/CartListItem';
import css from './CartList.module.scss';
import Button from '../basic/Button/Button';

interface Props extends HTMLProps<HTMLUListElement> {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
  deleteAllProducts: () => void;
}

const CartList: FC<Props> = ({
  filledCart,
  deleteCartItem,
  deleteAllProducts,
}) => {
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
      <Button onClick={deleteAllProducts} type="button">
        Очистити кошик
      </Button>
    </div>
  );
};

export default CartList;
