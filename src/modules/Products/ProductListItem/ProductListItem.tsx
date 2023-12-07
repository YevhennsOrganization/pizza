import React, { FC, useState } from 'react';
import ProductQuantity from './components/ProductQuantity/ProductQuantity';
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from '@/redux/products/productsSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toast } from 'react-toastify';
import ProductFooter from './components/ProductFooter/ProductFooter';
import css from './ProductListItem.module.scss';
import ProductDescription from './components/ProductDescription/ProductDescription';
import Icon from '@/UI/basic/Icon/Icon';
import RoundButton from '@/UI/basic/RoundButton/RoundButton';

interface Props {
  item: TProduct;
  addToCart: TAddToCart;
  setFavoriteProducts: (_id: string) => boolean;
  favoriteProducts: TProductsArr;
  isInCart: (_id: string) => boolean;
}

const ProductListItem: FC<Props> = ({
  item,
  addToCart,
  setFavoriteProducts,
  favoriteProducts,
  isInCart,
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
      toast.warn('Видалено з улюблених', {
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
    <article className={css.listItem}>
      {promotion && <div className={css.promotion}>Акція</div>}
      <div className={css.favorite}>
        <RoundButton aria-label="add to favorite" onClick={addToFavorite}>
          {isFavorite ? (
            <Icon
              svg="heart-filled"
              iconWidth={34}
              iconHeight={34}
              color="accent"
            />
          ) : (
            <Icon svg="heart" iconWidth={34} iconHeight={34} />
          )}
        </RoundButton>
      </div>
      <ProductDescription
        photo={photo}
        title={title}
        description={description}
        dimension={dimension}
      />
      <ProductQuantity getTotalQuantity={getTotalQuantity} />
      <ProductFooter
        _id={_id}
        totalQuantity={totalQuantity}
        promotion={promotion}
        totalPrice={totalPrice}
        totalPromPrice={totalPromPrice}
        addToCart={addToCart}
        isInCart={isInCart}
      />
    </article>
  );
};

export default ProductListItem;
