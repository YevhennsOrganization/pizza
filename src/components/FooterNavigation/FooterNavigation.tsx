import React, { FC } from 'react';
import Link from 'next/link';

import PhoneNumbersSet from '../PhoneNumbersSet/PhoneNumbersSet';

import css from './FooterNavigation.module.scss';

const FooterNavigation: FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <Link href="#">Про нас</Link>
        <p>Працюємо з 10:00 до 22:00</p>
      </div>
      <div className={css.item}>
        <Link href="#">Оплата онлайн</Link>
        <Link href="#">Власна доставка</Link>
      </div>
      <div className={css.item}>
        <Link href="#">Конфіденційність</Link>
        <Link href="#">Оферта</Link>
      </div>
      <PhoneNumbersSet />
    </div>
  );
};

export default FooterNavigation;
