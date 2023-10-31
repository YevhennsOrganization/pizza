import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './ProductsList.module.scss';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';

interface Props {
  data: TChosenProduct[];
  getCurrentItem: (_id: string) => void;
  currentItem: TChosenProduct;
}

const ProductsList: FC<Props> = ({ data, getCurrentItem, currentItem }) => {
  const [a, setA] = useState(null);
  const { title, price, photo } = currentItem;

  const dispatch = useAppDispatch();

  const addToCart = (_id: string) => {
    getCurrentItem(_id);

    // const cartItem = {
    //   id: nanoid(),
    //   photo: photo,
    //   title: title,
    //   quantity: 1,
    //   totalPrice: price,
    // };
    // dispatch(addItem(cartItem));
    // toast.success('Додано у кошик', {
    //   position: 'top-center',
    //   autoClose: 1500,
    //   hideProgressBar: true,
    // });
  };
  console.log(currentItem);

  const addToCart1 = () => {
    const cartItem = {
      id: nanoid(),
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
  };
  const toCart = (_id: string) => {
    addToCart(_id);
    addToCart1();
  };
  console.log(title);

  // useEffect(() => {
  //   const cartItem = {
  //     id: nanoid(),
  //     photo: photo,
  //     title: title,
  //     quantity: 1,
  //     totalPrice: price,
  //   };
  //   dispatch(addItem(cartItem));
  //   toast.success('Додано у кошик', {
  //     position: 'top-center',
  //     autoClose: 1500,
  //     hideProgressBar: true,
  //   });
  // }, [dispatch, photo, price, title]);

  return (
    <ul className={css.list}>
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li key={_id} className={css.listItem}>
            <button type="button" className={css.favorite}>
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
              onClick={() => addToCart(_id)}
            />
            <div className={css.info}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{dimension}</p>
            </div>
            <div className={css.footerItem}>
              <p className={css.price} onClick={() => toCart(_id)}>
                {price} грн
              </p>
              {/* <Button onClick={} /> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
