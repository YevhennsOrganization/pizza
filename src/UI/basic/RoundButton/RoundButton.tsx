import React, { FC, ReactNode } from 'react';
import css from './RoundButton.module.scss';

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const RoundButton: FC<Props> = ({ children, onClick, disabled, ...props }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default RoundButton;
