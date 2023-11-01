import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import { cartReducer } from './cart/cartSlice';
import { productsReducer } from './products/productsSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

const rootReducer = persistReducer(
  cartPersistConfig,
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
  })
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
