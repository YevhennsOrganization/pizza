import React, { FC } from 'react';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import { addItem, getFilledCart } from '@/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getFavorites } from '@/redux/products/productsSlice';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import css from './ProductsList.module.scss';

interface Props {
  data: TProductsArr;
}

const ProductsList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavorites);
  const filledCart = useAppSelector(getFilledCart);

  const isInCart = (_id: string) => filledCart.some(item => item._id === _id);

  const addToCart = (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => {
    const chosenProduct = data.find(item => item._id === _id);
    if (chosenProduct) {
      const { photo, title, _id } = chosenProduct;
      const cartItem = {
        _id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: totalPrice,
      };
      const cartPromItem = {
        _id: _id,
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
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
