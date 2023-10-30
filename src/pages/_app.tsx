import React, { FC, useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persist } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '@/styles/globals.scss';
import { getItems } from '@/api/getItems';
import { getProducts } from '@/redux/products/productsOperations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getProducts);
  // }, [dispatch]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
