import React, { FC, useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { Container } from '@/components/Container/Container';
import { getFilledCart } from '@/redux/cart/cartSlice';
import { useAppSelector } from '@/redux/hooks';

import css from './Header.module.scss';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';

const Header: FC = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const items = useAppSelector(getFilledCart);

  useEffect(() => {
    setItemsInCart(items.length);
  }, [items]);

  return (
    <header className={css.header}>
      <Container className={css.headerItem}>
        <Logo />
        <div className={css.headerLinks}>
          <div className={css.phoneNumbersSet}>
            <a href="tel:+380930000000">093 000 00 00</a>
            <a href="tel:+380670000000">067 000 00 00</a>
          </div>
          <HeaderNavLink hrefProp={'#'} Icon={BiUser} text={'Увійти'} />
          <HeaderNavLink
            hrefProp={'/cart'}
            Icon={RiShoppingBasketLine}
            text={itemsInCart}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
