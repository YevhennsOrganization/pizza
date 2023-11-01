import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { addItem } from '@/redux/cart/cartSlice';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';
import css from './ChosenItem.module.scss';
import Button from '../Button/Button';

interface Props {
  open: boolean;
  handleClose: () => void;
  currentItem: TChosenProduct;
}

const ChosenItem: React.FC<Props> = ({ open, handleClose, currentItem }) => {
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
    toast.success('Додано у кошик', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: true,
    });
    handleClose();
  };

  return (
    <div>
      <Modal className={css.modalWrapper} open={open} onClose={handleClose}>
        <div className={css.modal}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Image src={photo} alt="item photo" width={200} height={200} />
            <IconButton
              onClick={handleClose}
              color="primary"
              aria-label="close"
            >
              <CancelIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          </div>
          <div className={css.quantitySet}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{dimension}</p>
            <p>{price} грн</p>
            <div className={css.buttonSet}>
              <IconButton
                onClick={decrement}
                color="primary"
                aria-label="minus"
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <p>{quantity}</p>
              <IconButton onClick={increment} color="primary" aria-label="plus">
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <p className={css.totalPrice}>Загальна сума: {totalPrice}</p>
            <div className={css.cartBtnWrapper}>
              {/* <Button variant="contained">В Улюблені</Button> */}
              {/* <Button onClick={addToCart} variant="contained">
                В кошик
              </Button> */}
              <Button onClick={addToCart} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChosenItem;
