import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { useAppSelector } from '@/redux/hooks';
import {
  getCustomerInfo,
  getFilledCart,
  getIsLoading,
} from '@/redux/cart/cartSlice';
import css from './FinalModal.module.scss';
import Loader from '@/components/Loader/Loader';

interface Props {
  open: boolean;
  finalAction: () => void;
}

const FinalModal: React.FC<Props> = ({ open, finalAction }) => {
  const filledCart = useAppSelector(getFilledCart);
  const info = useAppSelector(getCustomerInfo);
  const isLoading = useAppSelector(getIsLoading);

  const { address, comment, delivery, name, number, sum } = info;

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
              <ul>
                {filledCart.map(({ title, quantity, totalPrice }) => {
                  return (
                    <li key={nanoid()}>
                      <p>Назва:{title}</p>
                      <p>Кількість: {quantity}</p>
                      <p>Ціна: {totalPrice}</p>
                    </li>
                  );
                })}
              </ul>
              <p>Інформація про замовника</p>
              <ul>
                <li>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p>Ім'я: {name}</p>
                </li>
                <li>
                  <p>Номер телефону: {number}</p>
                </li>
                {delivery ? (
                  <li>
                    <p>Доставка: Так</p>
                  </li>
                ) : (
                  <li>
                    <p>Доставка: Ні</p>
                  </li>
                )}
                {address && (
                  <li>
                    <p>Адреса: {address}</p>
                  </li>
                )}
                {comment && (
                  <li>
                    <p>Коментар: {comment}</p>
                  </li>
                )}
                <li>
                  <p>Загальна сума {sum} грн</p>
                </li>
              </ul>
              <Button
                onClick={finalAction}
                variant="contained"
                sx={{
                  display: 'flex',
                  mx: 'auto',
                }}
              >
                OK
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FinalModal;
