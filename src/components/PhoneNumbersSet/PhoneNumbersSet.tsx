import React, { FC } from 'react';

import css from './PhoneNumbersSet.module.scss';

const PhoneNumbersSet: FC = () => {
  return (
    <div className={css.wrapper}>
      <a href="tel:+380930000000">093 000 00 00</a>
      <a href="tel:+380670000000">067 000 00 00</a>
    </div>
  );
};

export default PhoneNumbersSet;
