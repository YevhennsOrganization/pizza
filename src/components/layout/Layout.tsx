import React, { FC, PropsWithChildren } from 'react';
import Addresses from './components/Addresses/Addresses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import css from './Layout.module.scss';
import TabNavigator from './components/TabNavigator/TabNavigator';

interface Props extends PropsWithChildren {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        {children}
        <Addresses />
        <TabNavigator />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
