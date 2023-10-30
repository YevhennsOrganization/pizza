import React, { FC, useState } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './GoodsList.module.scss';
import { addItem } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';

interface Props {
  data: TChosenGood[];
  getCurrentItem: (_id: string) => void;
  // getCurrentDrink1: (_id: string) => void;
  // currentItem: TChosenGood;
}

const GoodsList: FC<Props> = ({
  data,
  getCurrentItem,
  // getCurrentDrink1,
  // currentItem,
}) => {
  // const [currentDrink, setCurrentDrink] = useState({} as TChosenGood);
  // const { title, price, photo } = currentItem;

  // const dispatch = useAppDispatch();

  // const addToCart = (_id: string) => {
  //   getCurrentDrink1(_id);
  //   const cartItem = {
  //     id: nanoid(),
  //     photo: photo,
  //     title: title,
  //     quantity: 1,
  //     totalPrice: price,
  //   };
  // dispatch(addItem(cartItem));
  // toast.success('Додано у кошик', {
  //   position: 'top-center',
  //   autoClose: 1500,
  //   hideProgressBar: true,
  // });
  // console.log(photo);

  // handleClose();
  // };

  // console.log(currentItem);

  // const toCart = (_id: string) => {
  //   getCurrentDrink1(_id);
  //   addToCart;
  // };
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
              onClick={() => getCurrentItem(_id)}
            />
            <div className={css.info}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{dimension}</p>
            </div>
            <div className={css.footerItem}>
              <p className={css.price}>{price} грн</p>
              {/* <Button /> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;
