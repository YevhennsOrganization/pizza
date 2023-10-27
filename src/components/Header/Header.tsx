import React, { FC, useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { Container } from '@/components/Container/Container';
import { getFilledCart } from '@/redux/cart/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import PhoneNumbersSet from '../PhoneNumbersSet/PhoneNumbersSet';
import HeaderNavLink from './HeaderNavLink/HeaderNavLink';
import css from './Header.module.scss';

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
          <PhoneNumbersSet />
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
