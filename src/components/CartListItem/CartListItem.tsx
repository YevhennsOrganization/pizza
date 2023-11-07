import React, { FC } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import css from './CartListItem.module.scss';

interface Props {
  data: TCartItem;
  deleteCartItem: (id: string) => void;
}

const CartListItem: FC<Props> = ({ data, deleteCartItem }) => {
  const { id, photo, title, quantity, totalPrice } = data;

  return (
    <li className={css.cartListItem}>
      <Image src={photo} alt="item photo" width={50} height={50} />
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{totalPrice} грн</p>
      <IconButton
        style={{ marginLeft: 'auto' }}
        onClick={() => deleteCartItem(id)}
        color="error"
        aria-label="delete"
      >
        <CancelIcon />
      </IconButton>
    </li>
  );
};

export default CartListItem;
