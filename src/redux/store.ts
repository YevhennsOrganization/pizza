import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import { cartReducer } from './cartSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
