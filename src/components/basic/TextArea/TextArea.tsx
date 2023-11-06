import React, { FC, forwardRef, HTMLProps, PropsWithRef } from 'react';
import css from './TextArea.module.scss';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
const TextArea: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <fieldset className={css.fieldset}>
        <label htmlFor={props.htmlFor}>{label}</label>
        <textarea rows={5} autoComplete="true" ref={ref} {...props} />
        {error && <span className={css.errorMessage}>{error}</span>}
      </fieldset>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
