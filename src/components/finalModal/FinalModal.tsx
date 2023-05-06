/* eslint-disable react/no-unescaped-entities */
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import css from './FinalModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerInfo, getFilledCart } from '@/redux/cartSlice';

type props = {
  open: boolean;
  finalAction: () => void;
};

const FinalModal = ({ open, finalAction }: props) => {
  const filledCart = useSelector(getFilledCart);
  const info = useSelector(getCustomerInfo);
  const dispatch = useDispatch();

  const { address, comment, delivery, name, number, sum } = info;

  return (
    <div>
      <Modal className={css.modalWrapper} open={open}>
        <div className={css.modal}>
          <p>Інформація про замовлення</p>
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
              <p>Ім'я: {name}</p>
            </li>
            <li>
              <p>Номер телефону: {number}</p>
            </li>
            {delivery !== false ? (
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
              <p>Загальна сума {sum}</p>
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
        </div>
      </Modal>
    </div>
  );
};

export default FinalModal;
