import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';
import Addresses from '../addresses/Addresses';
import Header from '../headerComponent/Header';
import Footer from '../footerComponent/Footer';
import css from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Navigation />
        {children}
        <Addresses />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
