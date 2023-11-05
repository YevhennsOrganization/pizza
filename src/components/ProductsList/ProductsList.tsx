import React, { FC } from 'react';
import ProductsListItem from '../ProductsListItem/ProductsListItem';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';
import css from './ProductsList.module.scss';

interface Props {
  data: TChosenProduct[];
}

const ProductsList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

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

  return (
    <ul className={css.list}>
      {data.map(item => {
        return (
          <ProductsListItem key={item._id} item={item} addToCart={addToCart} />
        );
      })}
    </ul>
  );
};

export default ProductsList;
