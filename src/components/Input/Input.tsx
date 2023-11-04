import React, { FC, forwardRef, HTMLProps, PropsWithRef } from 'react';
import css from './Input.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}
const Input: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <fieldset className={css.fieldset}>
        <label>{label}</label>
        <input autoComplete="true" ref={ref} {...props} />
        {error && <span className={css.errorMessage}>{error}</span>}
      </fieldset>
    );
  }
);

Input.displayName = 'Input';

export default Input;
