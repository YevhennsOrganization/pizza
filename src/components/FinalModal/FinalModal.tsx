/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import Button from '@/components/basic/Button/Button';
import LoaderModal from '../common/LoaderModal/LoaderModal';
import { useAppSelector } from '@/redux/hooks';
import {
  getCustomerInfo,
  getError,
  getFilledCart,
  getIsLoading,
} from '@/redux/cart/cartSlice';
import css from './FinalModal.module.scss';
import Error500 from '../errors/Error500/Error500';

interface Props {
  finalAction: () => void;
}

const FinalModal: FC<Props> = ({ finalAction }) => {
  const filledCart = useAppSelector(getFilledCart);
  const info = useAppSelector(getCustomerInfo);
  const isLoading = useAppSelector(getIsLoading);

  const { sum } = info;
  const err = useAppSelector(getError);
  console.log(err);

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
              {filledCart.map(({ title, quantity, totalPrice }) => {
                return (
                  <li key={nanoid()}>
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
