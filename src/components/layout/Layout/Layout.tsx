import React, { FC } from 'react';
import Addresses from '../Addresses/Addresses';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        {children}
        <Addresses />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
