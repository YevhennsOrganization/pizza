import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { nanoid } from 'nanoid';
import css from './ChosenItem.module.css';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/cartSlice';

const ChosenItem: React.FC<TChosenItem> = ({
  open,
  handleClose,
  currentItem,
}) => {
  const { title, description, dimension, price, photo } = currentItem;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [price, quantity]);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = () => {
    const cartItem = {
      id: nanoid(),
      photo: photo,
      title: title,
      quantity: quantity,
      totalPrice: totalPrice,
    };
    dispatch(addItem(cartItem));
    handleClose();
  };

  return (
    <div>
      <Modal className={css.modalWrapper} open={open} onClose={handleClose}>
        <div className={css.modal}>
          <div>
            <Image src={photo} alt="item photo" width={200} height={200} />
            <IconButton
              onClick={handleClose}
              color="primary"
              aria-label="close"
              sx={{
                position: 'relative',
                top: '-170px',
              }}
            >
              <CancelIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          </div>

          <h2>{title}</h2>
          <p>{description}</p>
          <p>{dimension}</p>
          <p>{price} грн</p>

          <div className={css.quantitySet}>
            <IconButton onClick={decrement} color="primary" aria-label="minus">
              <RemoveCircleOutlineIcon />
            </IconButton>
            <p>{quantity}</p>
            <IconButton onClick={increment} color="primary" aria-label="plus">
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <p className={css.totalPrice}>Загальна сума: {totalPrice}</p>
          <Button onClick={addToCart} variant="contained">
            В кошик
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ChosenItem;
