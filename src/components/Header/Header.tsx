import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container } from '@/components/Container/Container';
import { getFilledCart } from '@/redux/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import css from './Header.module.scss';

const Header: React.FC = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const items = useAppSelector(getFilledCart);

  useEffect(() => {
    setItemsInCart(items.length);
  }, [items]);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerItem}>
          <Logo />
          <a href="tel:+380930000000">093 000 00 00</a>
          <Link className={css.cartLink} href={'/cart'}>
            <AddShoppingCartIcon
              sx={{ color: 'white' }}
              className={css.cartIcon}
            />
            <p>{itemsInCart}</p>
          </Link>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
