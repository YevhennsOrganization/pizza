import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import css from './Layout.module.css';

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
