import React, { FC, HTMLProps, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addInfo, getFilledCart } from '@/redux/cart/cartSlice';
import { sendOrder } from '@/redux/cart/cartOperations';
import Button from '@/components/basic/Button/Button';
import Input from '@/components/basic/Input/Input';
import TextArea from '@/components/basic/TextArea/TextArea';
import Checkbox from '../../basic/Checkbox/Checkbox';
import css from './CartForm.module.scss';

interface Props extends HTMLProps<HTMLFormElement> {
  openModal: () => void;
}

const CartForm: FC<Props> = ({ openModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TInfo>({ mode: 'onChange' });

  const [totalPayment, setTotalPayment] = useState(0);

  const payment = useAppSelector(getFilledCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const result = payment
      .map((element: { totalPrice: number }) => element.totalPrice)
      .reduce((acc: number, val: number) => acc + val, 0);
    setTotalPayment(result);
  }, [payment]);

  const onSubmit: SubmitHandler<TInfo> = data => {
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
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name', { required: "Це обов'язкове поле!" })}
        placeholder="Введіть м'я"
        id="customer-name"
        label="Ім'я"
        htmlFor="customer-name"
        error={errors?.name?.message}
        inputMode="text"
        type="text"
      />
      <Input
        {...register('number', {
          required: "Це обов'язкове поле!",
          minLength: 10,
          maxLength: {
            value: 10,
            message: 'Забагато цифр',
          },
        })}
        pattern="[0-9]{10}"
        placeholder="Введіть номер телефону"
        id="customer-number"
        label="Номер телефону в форматі: 0991115533"
        htmlFor="customer-number"
        type="tel"
        error={errors?.number?.message}
        inputMode="tel"
      />

      <Checkbox
        {...register('delivery')}
        id="delivery"
        htmlFor="delivery"
        label="Доставка"
      />
      {delivery && (
        <Input
          {...register('address', { required: "Це обов'язкове поле!" })}
          id="address"
          label="Введіть адресу"
          placeholder="Введіть адресу"
          htmlFor="address"
          error={errors?.address?.message}
        />
      )}
      <TextArea
        {...register('comment')}
        id="comment"
        placeholder="Введіть коментар"
        label="Коментар"
        htmlFor="comment"
      />
      <p className={css.totalPayment}>До оплати {totalPayment} грн</p>
      <Button type="submit">{'Підтвердити'}</Button>
    </form>
  );
};

export default CartForm;
