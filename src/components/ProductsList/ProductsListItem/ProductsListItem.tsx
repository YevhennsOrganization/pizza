import React, { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import ProductsQuantity from '@/components/ProductsQuantity/ProductsQuantity';
import { AiOutlineHeart } from 'react-icons/ai';
import css from './ProductsListItem.module.scss';

interface Props {
  item: TChosenProduct;
  addToCart: (_id: string) => void;
}

const ProductsListItem: FC<Props> = ({ item, addToCart }) => {
  const { _id, title, description, dimension, price, photo } = item;

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
      <ProductsQuantity />
      <div className={css.footerItem}>
        <p className={css.price}>{price} грн</p>
        <Button onClick={() => addToCart(_id)} />
      </div>
    </li>
  );
};

export default ProductsListItem;
