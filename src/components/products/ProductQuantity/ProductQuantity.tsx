import React, { FC, useState, useEffect } from 'react';
import RoundButton from '../../basic/RoundButton/RoundButton';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import css from './ProductQuantity.module.scss';

interface Props {
  getTotalQuantity: (quantity: number) => void;
}

const ProductQuantity: FC<Props> = ({ getTotalQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    getTotalQuantity(quantity);
  }, [getTotalQuantity, quantity]);

  return (
    <div className={css.wrapper}>
      <RoundButton
        onClick={decrement}
        disabled={quantity === 1}
        aria-label="minus"
      >
        <AiFillCaretLeft />
      </RoundButton>
      <p>{quantity} шт.</p>
      <RoundButton onClick={increment} aria-label="plus">
        <AiFillCaretRight />
      </RoundButton>
    </div>
  );
};

export default ProductQuantity;
