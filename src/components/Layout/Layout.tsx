import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import css from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={css.wrapper}>
      <Header/>
      <main className={css.main}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
