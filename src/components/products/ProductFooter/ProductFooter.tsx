import React, { FC } from 'react';
import Button from '@/components/basic/Button/Button';
import css from './ProductFooter.module.scss';

interface Props {
  _id: string;
  totalQuantity: number;
  promotion: boolean;
  totalPrice: number;
  totalPromPrice: number;
  addToCart: (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => void;
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
        icon
        color="white"
        iconWidth={16}
        iconHeight={16}
        svg="basket"
        type="button"
        onClick={() =>
          addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
        }
      >
        {'В кошик'}
      </Button>
    </div>
  );
};

export default ProductFooter;
