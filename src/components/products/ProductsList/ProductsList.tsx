import React, { FC } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getFavorites } from '@/redux/products/productsSlice';
import { toast } from 'react-toastify';
import css from './ProductsList.module.scss';

interface Props {
  data: TProductsArr;
}

const ProductsList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavorites);

  const addToCart = (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => {
    const chosenProduct = data.find(item => item._id === _id);
    if (chosenProduct) {
      const { _id, photo, title } = chosenProduct;
      const cartItem = {
        id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: totalPrice,
      };
      const cartPromItem = {
        id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: TotalPromPrice,
      };
      if (promotion) {
        dispatch(addItem(cartPromItem));
      } else {
        dispatch(addItem(cartItem));
      }
      toast.success('Додано у кошик', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  const setFavoriteProducts = (_id: string) => {
    if (favoriteProducts.some(item => item._id === _id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={css.list}>
      {data.map(item => {
        return (
          <ProductListItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            setFavoriteProducts={setFavoriteProducts}
            favoriteProducts={favoriteProducts}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
