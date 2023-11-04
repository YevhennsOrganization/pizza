import React, { FC } from 'react';
import css from './Button.module.scss';
import { RiShoppingBasket2Line } from 'react-icons/ri';

interface Props {
  typeSubmit?: boolean;
  isIcon: boolean;
  children: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ typeSubmit, isIcon, children, onClick }) => {
  return (
    <button
      type={typeSubmit ? 'submit' : 'button'}
      className={css.button}
      onClick={onClick}
    >
      {isIcon && <RiShoppingBasket2Line />}
      {children}
    </button>
  );
};

export default Button;
