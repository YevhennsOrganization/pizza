import React, { FC } from 'react';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import css from './Button.module.scss';

interface Props {
  typeSubmit?: boolean;
  icon: boolean;
  text: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ typeSubmit, icon, text, onClick }) => {
  return (
    <button
      type={typeSubmit ? 'submit' : 'button'}
      className={css.button}
      onClick={onClick}
    >
      {icon && <RiShoppingBasket2Line fontSize={'16px'} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
