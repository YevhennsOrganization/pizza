import React, { FC } from 'react';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import css from './Button.module.scss';

interface Props {
  type?: 'submit' | 'button';
  icon: boolean;
  text: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ type = 'submit', icon, text, onClick }) => {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {icon && <RiShoppingBasket2Line fontSize={'16px'} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
