import React, { FC, useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Container from '@/UI/common/Container/Container';
import PhoneNumbersSet from '../PhoneNumbersSet/PhoneNumbersSet';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
import Navigation from '../Navigation/Navigation';
import { getFilledCart } from '@/redux/cart/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import css from './Header.module.scss';

const Header: FC = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const items = useAppSelector(getFilledCart);

  useEffect(() => {
    setItemsInCart(items.length);
  }, [items]);

  return (
    <header className={css.wrapper}>
      <Container>
        <div className={css.headerItem}>
          <Logo />
          <div className={css.headerLinks}>
            <div className={css.phoneNumberSet}>
              <PhoneNumbersSet />
            </div>
            <HeaderNavLink
              hrefProp={'/underDevelopment'}
              svg="user"
              text={'Увійти'}
            />
            <HeaderNavLink hrefProp={'/cart'} svg="basket" text={itemsInCart} />
          </div>
        </div>
      </Container>
      <Navigation />
    </header>
  );
};

export default Header;
