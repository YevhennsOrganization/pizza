import React, { FC, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button/Button';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import ProductsQuantity from '@/components/ProductsQuantity/ProductsQuantity';

import { AiOutlineHeart } from 'react-icons/ai';

import css from './ProductsListItem.module.scss';
// import Button from '@/stories/Button/Button';

interface Props {
  item: TChosenProduct;
  addToCart: (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => void;
}

const ProductsListItem: FC<Props> = ({ item, addToCart }) => {
  const {
    _id,
    title,
    description,
    dimension,
    price,
    photo,
    promotion,
    promPrice,
  } = item;

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalPromPrice, setTotalPromPrice] = useState(promPrice);
  const [totalQuantity, setTotalQuantity] = useState(1);

  const getTotalQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
    setTotalPrice(price * quantity);
    setTotalPromPrice(promPrice * quantity);
  };

  return (
    <li className={css.listItem}>
      {promotion && <div className={css.promotion}>Акція</div>}
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
        {promotion ? (
          <div className={css.priceWrapper}>
            <p className={css.oldPrice}>{totalPrice} грн</p>
            <p className={css.promPrice}>{totalPromPrice} грн</p>
          </div>
        ) : (
          <p className={css.price}>{totalPrice} грн</p>
        )}
        <Button
          Icon={RiShoppingBasket2Line}
          typeSubmit={false}
          onClick={() =>
            addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
          }
        >
          {'В кошик'}
        </Button>
      </div>
    </li>
  );
};

export default ProductsListItem;
