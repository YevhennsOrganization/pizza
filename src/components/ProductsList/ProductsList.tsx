import React, { FC } from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './ProductsList.module.scss';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';

interface Props {
  data: TChosenProduct[];
}

const ProductsList: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const addToCart = (_id: string) => {
    const chosenProduct = data.find(item => item._id === _id);
    if (chosenProduct) {
      const { _id, photo, title, price } = chosenProduct;
      const cartItem = {
        id: _id,
        photo: photo,
        title: title,
        quantity: 1,
        totalPrice: price,
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
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li key={_id} className={css.listItem}>
            <button
              type="button"
              className={css.favorite}
              aria-label="add to favorite"
            >
              <AiOutlineHeart
                style={{
                  fontSize: '34',
                }}
              />
            </button>
            <Image
              src={photo}
              alt="item photo"
              width={200}
              height={200}
              priority={true}
            />
            <div className={css.info}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{dimension}</p>
            </div>
            <div className={css.footerItem}>
              <p className={css.price}>{price} грн</p>
              <Button onClick={() => addToCart(_id)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
