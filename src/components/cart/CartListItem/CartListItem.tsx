import React, { FC } from 'react';
import Image from 'next/image';
import RoundButton from '../../basic/RoundButton/RoundButton';
import { AiFillDelete } from 'react-icons/ai';
import css from './CartListItem.module.scss';

interface Props {
  data: TCartItem;
  deleteCartItem: (id: string) => void;
}

const CartListItem: FC<Props> = ({ data, deleteCartItem }) => {
  const { id, photo, title, quantity, totalPrice } = data;

  return (
    <div className={css.cartListItem}>
      <Image src={photo} alt="item photo" width={50} height={50} />
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{totalPrice} грн</p>
      <RoundButton onClick={() => deleteCartItem(id)}>
        <AiFillDelete />
      </RoundButton>
    </div>
  );
};

export default CartListItem;
