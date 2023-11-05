import React, { FC, forwardRef, HTMLProps, PropsWithRef } from 'react';
import css from './Checkbox.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  delivery: boolean;
}

const Checkbox: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, delivery, ...props }, ref) => {
    return (
      <fieldset className={css.fieldset}>
        <input type="checkbox" ref={ref} {...props} />
        <label htmlFor={props.htmlFor}>{label}</label>
      </fieldset>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
