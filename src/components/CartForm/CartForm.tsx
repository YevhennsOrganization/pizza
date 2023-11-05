import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { addInfo, getFilledCart } from '@/redux/cart/cartSlice';
import { sendOrder } from '@/redux/cart/cartOperations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import css from './CartForm.module.scss';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';

interface Props {
  openModal: () => void;
}

type FinalForm = {
  openModal: string;
  delivery: boolean;
  name: string;
  number: string;
  address?: string;
  comment?: string;
};

const CartForm: FC<Props> = ({ openModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FinalForm>({ mode: 'onChange' });

  const [totalPayment, setTotalPayment] = useState(0);

  const payment = useAppSelector(getFilledCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const result = payment
      .map((element: { totalPrice: number }) => element.totalPrice)
      .reduce((acc: number, val: number) => acc + val, 0);
    setTotalPayment(result);
  }, [payment]);

  const onSubmit: SubmitHandler<FinalForm> = data => {
    openModal();
    const customerInfo: TInfo = {
      address: data.address,
      comment: data.comment,
      delivery: data.delivery,
      name: data.name,
      number: data.number,
      sum: totalPayment,
    };
    dispatch(addInfo(customerInfo));
    const reqBody: TSummary = { customerInfo, payment };
    dispatch(sendOrder(reqBody));
    reset();
  };

  const delivery = watch('delivery');

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Введіть м'я"
          id="customer-name"
          label="Ім'я"
          error={errors?.name?.message}
          {...register('name', { required: "Це обов'язкове поле!" })}
        />
        <Input
          placeholder="Введіть номер телефону"
          id="customer-number"
          label="Номер телефону"
          error={errors?.name?.message}
          {...register('number', { required: "Це обов'язкове поле!" })}
        />
        <Checkbox
          delivery={delivery}
          id="delivery"
          {...register('delivery')}
          label="Доставка"
        />
        {/* <div>
          <input type="checkbox" id="delivery" {...register('delivery')} />
          <label
            htmlFor="delivery"
            style={{ fontFamily: 'var(--secondary-font)' }}
          >
            Доставка
          </label>
        </div> */}
        {delivery && (
          <Input
            id="address"
            label="Введіть адресу"
            placeholder="Введіть адресу"
            error={errors?.address?.message}
            {...register('address', { required: "Це обов'язкове поле!" })}
          />
        )}
        <TextArea
          {...register('comment')}
          id="comment"
          placeholder="Введіть коментар"
          label="Коментар"
        />
        <p className={css.totalPayment}>До оплати {totalPayment} грн</p>
        <Button>{'Підтвердити'}</Button>
      </form>
    </>
  );
};

export default CartForm;
