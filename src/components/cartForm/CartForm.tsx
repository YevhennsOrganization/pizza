import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, getFilledCart } from '@/redux/cartSlice';
import css from './CartForm.module.css';

const CartForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [totalPayment, setTotalPayment] = useState(0);

  const payment = useSelector(getFilledCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = payment
      .map(element => element.totalPrice)
      .reduce((acc, val) => acc + val, 0);
    setTotalPayment(result);
  }, [payment]);

  const onSubmit = data => {
    console.log(data, payment, `Усього - ${totalPayment} грн`);
    dispatch(clearAll());
    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name', { required: "Це обов'язкове поле!" })}
          id="outlined-basic"
          label="Ім'я"
          variant="outlined"
        />
        <div style={{ color: 'red' }}>{errors.name?.message}</div>
        <TextField
          {...register('number', { required: "Це обов'язкове поле!" })}
          id="outlined-basic"
          label="Номер телефону"
          variant="outlined"
        />
        <div style={{ color: 'red' }}>{errors.number?.message}</div>
        <div>
          <input type="checkbox" id="horns" {...register('delivery1')} />
          <label htmlFor="horns">Доставка</label>
        </div>
        <FormControl>
          <FormLabel>Коментар</FormLabel>
          <Textarea
            placeholder="Введіть коментар"
            minRows={2}
            {...register('comment')}
          />
        </FormControl>

        <Button type="submit" variant="contained">
          До оплати {totalPayment} грн
        </Button>
      </form>
    </>
  );
};

export default CartForm;
