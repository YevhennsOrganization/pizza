import React, { FC, useEffect } from 'react';
import CartListItem from './CartListItem/CartListItem';
import Button from '@/UI/basic/Button/Button';
import css from './CartList.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { addOrderSum } from '@/redux/cart/cartSlice';

interface Props {
  filledCart: TCart;
  deleteCartItem: (_id: string) => void;
  deleteAllProducts: () => void;
}

const CartList: FC<Props> = ({
  filledCart,
  deleteCartItem,
  deleteAllProducts,
}) => {
  let sum = 0;
  filledCart.forEach(item => (sum += item.totalPrice));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addOrderSum(sum));
  }, [dispatch, sum]);

  return (
    <div className={css.cartList}>
      {filledCart.map(data => {
        return (
          <CartListItem
            key={data._id}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
      <p className={css.totalPayment}>До оплати {sum} грн</p>
      <Button onClick={deleteAllProducts} type="button">
        Очистити кошик
      </Button>
    </div>
  );
};

export default CartList;
