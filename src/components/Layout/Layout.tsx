import React from 'react';
import Header from '@/components/header/Header';
import Navigation from '../Navigation/Navigation';
import Addresses from '../addresses/Addresses';
import Footer from '../footer/Footer';
import css from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
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
