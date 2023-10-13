import React from 'react';
import Link from 'next/link';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container } from '../container/Container';
import css from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerItem}>
          <Logo />
          <a href="tel:+380937415167">093 741 51 67</a>
          <Link href={'/cart'}>
            <AddShoppingCartIcon
              sx={{ color: 'white' }}
              className={css.cartIcon}
            />
          </Link>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
