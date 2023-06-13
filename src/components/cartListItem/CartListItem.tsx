import React from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import css from './CartListItem.module.css';

const CartListItem: React.FC<TCartListItem> = ({ data, deleteCartItem }) => {
  const { id, photo, title, quantity, totalPrice } = data;

  return (
    <li className={css.cartListItem}>
      <Image src={photo} alt="item photo" width={50} height={50} />
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{totalPrice} грн</p>
      <IconButton
        onClick={() => deleteCartItem(id)}
        color="primary"
        aria-label="delete"
      >
        <CancelIcon />
      </IconButton>
    </li>
  );
};

export default CartListItem;
