import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import ProductsQuantity from '@/components/ProductsQuantity/ProductsQuantity';
import { AiOutlineHeart } from 'react-icons/ai';
import css from './ProductsListItem.module.scss';

interface Props {
  item: TChosenProduct;
  addToCart: (_id: string) => void;
  getTotalQuantityAndPrice: (quantity: number, price: number) => void;
}

const ProductsListItem: FC<Props> = ({
  item,
  addToCart,
  getTotalQuantityAndPrice,
}) => {
  const { _id, title, description, dimension, price, photo } = item;

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalQuantity, setTotalQuantity] = useState(1);

  const getTotalQuantity = (quantity: number) => {
    setTotalPrice(price * quantity);
    setTotalQuantity(quantity);
  };

  useEffect(() => {
    getTotalQuantityAndPrice(totalQuantity, totalPrice);
  }, [getTotalQuantityAndPrice, totalPrice, totalQuantity]);

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
        <Button onClick={() => addToCart(_id)} />
      </div>
    </li>
  );
};

export default ProductsListItem;
