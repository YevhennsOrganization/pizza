import React, { FC, useState } from 'react';
import Image from 'next/image';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import ProductsQuantity from '@/components/ProductsQuantity/ProductsQuantity';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Button from '@/components/basic/Button/Button';
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from '@/redux/products/productsSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';
import css from './ProductsListItem.module.scss';

interface Props {
  item: TChosenProduct;
  addToCart: (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => void;
  setFavoriteProducts: (_id: string) => boolean;
  favoriteProducts: TChosenProductsArr;
}

const ProductsListItem: FC<Props> = ({
  item,
  addToCart,
  setFavoriteProducts,
  favoriteProducts,
}) => {
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
  const [isFavorite, setIsFavorite] = useState(setFavoriteProducts(_id));

  const dispatch = useAppDispatch();

  const getTotalQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
    setTotalPrice(price * quantity);
    setTotalPromPrice(promPrice * quantity);
  };

  const addToFavorite = () => {
    if (favoriteProducts.some(item => item._id === _id)) {
      setIsFavorite(false);
      dispatch(removeFromFavoriteAction(_id));
      toast.success('Видалено з улюблених', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else {
      setIsFavorite(true);
      dispatch(addToFavoriteAction(item));
      toast.success('Додано в улюблені', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className={css.listItem}>
      {promotion && <div className={css.promotion}>Акція</div>}
      <button
        type="button"
        className={css.favorite}
        aria-label="add to favorite"
        onClick={addToFavorite}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
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
          type="button"
          onClick={() =>
            addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
          }
        >
          <RiShoppingBasket2Line />
          {'В кошик'}
        </Button>
      </div>
    </div>
  );
};

export default ProductsListItem;
