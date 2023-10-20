import React from 'react';
import Link from 'next/link';
import css from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.link} href={'/'}>
        Новинки
      </Link>
      <Link className={css.link} href={'/pizza'}>
        Піци
      </Link>
      <Link className={css.link} href={'/appetizer'}>
        Закуски
      </Link>
      <Link className={css.link} href={'/drinks'}>
        Напої
      </Link>
    </nav>
  );
};

export default Navigation;
