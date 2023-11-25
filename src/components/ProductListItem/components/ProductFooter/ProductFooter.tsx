import React, { FC } from 'react';
import Button from '@/UI/basic/Button/Button';
import css from './ProductFooter.module.scss';
import Icon from '@/UI/basic/Icon/Icon';

interface Props extends TProductItem {
  addToCart: TAddToCart;
}

const ProductFooter: FC<Props> = ({
  _id,
  totalQuantity,
  promotion,
  totalPrice,
  totalPromPrice,
  addToCart,
}) => {
  return (
    <div className={css.productFooter}>
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
        <Icon svg="basket" iconWidth={16} iconHeight={16} color="white" />В
        кошик
      </Button>
    </div>
  );
};

export default ProductFooter;
