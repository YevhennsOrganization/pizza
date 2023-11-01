import React, { FC } from 'react';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import css from './Button.module.scss';

interface Props {
  onClick?: () => void;
}

const Button: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      <RiShoppingBasket2Line fontSize={'16px'} />
      <span>В кошик</span>
    </button>
  );
};

export default Button;
