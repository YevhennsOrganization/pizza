import React, { FC, useState } from 'react';
import css from './ProductsList.module.scss';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';
import ProductsListItem from '../ProductsListItem/ProductsListItem';

interface Props {
  data: TChosenProduct[];
}

const ProductsList: FC<Props> = ({ data }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(1);

  const dispatch = useAppDispatch();

  const getTotalQuantityAndPrice = (quantity: number, price: number) => {
    setTotalPrice(price);
    setTotalQuantity(quantity);
  };

  const addToCart = (_id: string) => {
    const chosenProduct = data.find(item => item._id === _id);
    if (chosenProduct) {
      const { _id, photo, title, price } = chosenProduct;
      const cartItem = {
        id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: totalPrice,
      };
      dispatch(addItem(cartItem));
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
          <ProductsListItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            getTotalQuantityAndPrice={getTotalQuantityAndPrice}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
