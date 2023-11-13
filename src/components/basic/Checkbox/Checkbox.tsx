import React, { FC, forwardRef, HTMLProps, PropsWithRef } from 'react';
import css from './Checkbox.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
}

const Checkbox: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, ...props }, ref) => {
    return (
      <fieldset className={css.fieldset}>
        <input type="checkbox" ref={ref} {...props} />
        {/* <span className={css.checkmark}></span> */}
        <label htmlFor={props.htmlFor}>{label}</label>
      </fieldset>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
