import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import css from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <Navigation />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
