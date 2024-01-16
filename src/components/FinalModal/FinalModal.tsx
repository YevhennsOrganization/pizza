/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import Button from '@/UI/basic/Button/Button';
import LoaderModal from '../../UI/common/LoaderModal/LoaderModal';
import Error500 from '../errors/Error500/Error500';
import css from './FinalModal.module.scss';
import { useAppSelector } from '@/redux/hooks';
import {
  getError,
  getFilledCart,
  getIsLoading,
  getOrderSum,
} from '@/redux/cart/cartSlice';

interface Props {
  finalAction: () => void;
}

const FinalModal: FC<Props> = ({ finalAction }) => {
  const filledCart = useAppSelector(getFilledCart);
  const sum = useAppSelector(getOrderSum);
  const isLoading = useAppSelector(getIsLoading);
  const err = useAppSelector(getError);

  if (err) {
    return <Error500 />;
  }

  return (
    <div className={css.modalWrapper}>
      {isLoading ? (
        <LoaderModal />
      ) : (
        <div className={css.modal}>
          <>
            <p className={css.resultText}>
              Дякуємо!
              <br />
              Ваше замовлення прийняте,
              <br />
              очікуйте дзвінок від менеджера
            </p>
            <p>Інформація про замовлення</p>
            <ul>
              {filledCart.map(({ _id, title, quantity, totalPrice }) => {
                return (
                  <li key={_id}>
                    <p>
                      {title} - {quantity} шт. - {totalPrice} грн.
                    </p>
                  </li>
                );
              })}
            </ul>
            <p>Загальна сума: {sum} грн.</p>
            <Button type="button" onClick={finalAction}>
              Вийти
            </Button>
          </>
        </div>
      )}
    </div>
  );
};

export default FinalModal;
