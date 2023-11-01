import React, { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import css from './ProductsQuantity.module.scss';

interface Props {}

const ProductsQuantity: FC<Props> = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={css.wrapper}>
      <IconButton onClick={decrement} color="primary" aria-label="minus">
        <RemoveCircleOutlineIcon />
      </IconButton>
      <p>{quantity}</p>
      <IconButton onClick={increment} color="primary" aria-label="plus">
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
};

export default ProductsQuantity;