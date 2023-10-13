import React from 'react';
import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '@/styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
