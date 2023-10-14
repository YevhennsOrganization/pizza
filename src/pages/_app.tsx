import React from 'react';
import Layout from '@/components/Layout/Layout';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store, persist} from '@/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import '@/styles/globals.scss';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
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
