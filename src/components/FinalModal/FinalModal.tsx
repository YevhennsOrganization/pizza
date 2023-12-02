/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import Button from '@/UI/basic/Button/Button';
import LoaderModal from '../../UI/common/LoaderModal/LoaderModal';
import Error500 from '../errors/Error500/Error500';
import css from './FinalModal.module.scss';

interface Props {
  finalAction: () => void;
  filledCart: TCart;
  sum: number;
  isLoading: boolean;
  err: any;
}

const FinalModal: FC<Props> = ({
  finalAction,
  filledCart,
  sum,
  isLoading,
  err,
}) => {
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
