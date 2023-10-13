import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import css from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
