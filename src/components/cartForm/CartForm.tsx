import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, addInfo, getFilledCart } from '@/redux/cartSlice';

const CartForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [checked, setChecked] = useState(false);
  const [comment, setComment] = useState('');

  const payment = useSelector(getFilledCart);
  const dispatch = useDispatch();

  useEffect(() => {
    payment.forEach(({ totalPrice }) => {
      const price = (totalPrice += totalPrice);
      console.log(price);
    });
  }, [payment]);

  const deleteAll = () => {
    dispatch(clearAll());
  };
  const HandleSubmit = e => {
    e.preventDefault();
    dispatch(addInfo({ name, number, checked, comment }));
    setName('');
    setNumber('');
    setChecked(false);
    setComment('');
  };

  const nameValue = e => {
    setName(e.target.value);
  };
  const numberValue = e => {
    setNumber(e.target.value);
  };
  const delivery = e => {
    setChecked(!checked);
  };
  const commentValue = e => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <TextField
        id="outlined-basic"
        label="Ім'я"
        variant="outlined"
        value={name}
        onChange={nameValue}
      />
      <TextField
        id="outlined-basic"
        label="Номер телефону"
        variant="outlined"
        value={number}
        onChange={numberValue}
      />
      <FormControlLabel
        control={<Checkbox onChange={delivery} />}
        label="Доставка"
      />
      <label htmlFor="comment">Коментар</label>
      <textarea
        value={comment}
        onChange={commentValue}
        id="comment"
        rows="4"
        cols="50"
        resize="none"
      ></textarea>
      <p>До оплати:</p>
      <Button type="submit" variant="contained">
        Підтвердити замовлення
      </Button>
      <Button onClick={deleteAll} variant="contained">
        Очистити кошик
      </Button>
    </form>
  );
};

export default CartForm;
