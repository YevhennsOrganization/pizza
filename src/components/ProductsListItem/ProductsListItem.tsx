import React, { FC, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button/Button';
import ProductsQuantity from '@/components/ProductsQuantity/ProductsQuantity';

import { AiOutlineHeart } from 'react-icons/ai';

import css from './ProductsListItem.module.scss';

interface Props {
  item: TChosenProduct;
  addToCart: (_id: string, totalQuantity: number, totalPrice: number) => void;
}

const ProductsListItem: FC<Props> = ({ item, addToCart }) => {
  const { _id, title, description, dimension, price, photo } = item;

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalQuantity, setTotalQuantity] = useState(1);

  const getTotalQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
    setTotalPrice(price * quantity);
  };

  return (
    <li className={css.listItem}>
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
      <ProductsQuantity getTotalQuantity={getTotalQuantity} />
      <div className={css.footerItem}>
        <p className={css.price}>{totalPrice} грн</p>
        <Button
          type="button"
          icon
          text={'В кошик'}
          onClick={() => addToCart(_id, totalQuantity, totalPrice)}
        />
      </div>
    </li>
  );
};

export default ProductsListItem;
