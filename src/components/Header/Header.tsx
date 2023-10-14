import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Container} from '@/components/Container/Container';
import css from './Header.module.scss';
import {useSelector} from 'react-redux';
import {getFilledCart} from '@/redux/cartSlice';

const Header: React.FC = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const items = useSelector(getFilledCart);

  useEffect(() => {
    setItemsInCart(items.length);
  }, [items]);
  // console.log(items.length);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerItem}>
          <Logo/>
          <a href='tel:+380930000000'>093 000 00 00</a>
          <Link className={css.cartLink} href={'/cart'}>
            <AddShoppingCartIcon
              sx={{color: 'white'}}
              className={css.cartIcon}
            />
            <p>{itemsInCart}</p>
          </Link>
        </div>
        <Navigation/>
      </Container>
    </header>
  );
};

export default Header;
