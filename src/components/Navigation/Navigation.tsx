import React from 'react';
import Link from 'next/link';
import css from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.link} href={'/'}>
        Новинки
      </Link>
      <Link className={css.link} href={'/pizzas'}>
        Піци
      </Link>
      <Link className={css.link} href={'/appetizers'}>
        Закуски
      </Link>
      <Link className={css.link} href={'/drinks'}>
        Напої
      </Link>
      <Link className={css.link} href={'/history'}>
        Історія замовлень
      </Link>
    </nav>
  );
};

export default Navigation;
