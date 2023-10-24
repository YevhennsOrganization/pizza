import React from 'react';
import Link from 'next/link';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FavoriteIcon from '@mui/icons-material/Favorite';
import css from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.link} href={'/'}>
        <NewspaperIcon />
        Новинки
      </Link>
      <Link className={css.link} href={'/pizzas'}>
        <LocalPizzaIcon />
        Піци
      </Link>
      <Link className={css.link} href={'/appetizers'}>
        <LunchDiningIcon />
        Закуски
      </Link>
      <Link className={css.link} href={'/drinks'}>
        <LocalDrinkIcon />
        Напої
      </Link>
      <Link className={css.link} href={'/favorite'}>
        <FavoriteIcon />
        Улюблені
      </Link>
    </nav>
  );
};

export default Navigation;
