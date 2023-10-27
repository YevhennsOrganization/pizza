import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@/components/Container/Container';
import { getFilledCart } from '@/redux/cart/cartSlice';
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
            <ShoppingCartIcon
              sx={{ color: 'white', fontSize: 50 }}
              className={css.cartIcon}
            />
            <p>{itemsInCart}</p>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
