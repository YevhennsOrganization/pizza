/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import Loader from '@/components/common/Loader/Loader';
import Button from '@/components/basic/Button/Button';
import Modal from '@mui/material/Modal';
import { useAppSelector } from '@/redux/hooks';
import {
  getCustomerInfo,
  getFilledCart,
  getIsLoading,
} from '@/redux/cart/cartSlice';
import css from './FinalModal.module.scss';

interface Props {
  open: boolean;
  finalAction: () => void;
}

const FinalModal: FC<Props> = ({ open, finalAction }) => {
  const filledCart = useAppSelector(getFilledCart);
  const info = useAppSelector(getCustomerInfo);
  const isLoading = useAppSelector(getIsLoading);

  const { sum } = info;

  return (
    <div>
      <Modal className={css.modalWrapper} open={open}>
        <div className={css.modal}>
          {isLoading ? (
            <Loader />
          ) : (
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
                {'Вийти'}
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FinalModal;
