import { useState, useEffect } from 'react';
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

const Cart: React.FC = () => {
  const [totalOrder, setTotalOrder] = useState([]);

  useEffect(() => {
    const items = JSON.parse(`${localStorage.getItem('cart')}`);
    if (items) {
      setTotalOrder(items);
    }
  }, []);

  // useEffect(() => {
  //   if (totalOrder) {
  //     window.localStorage.setItem('cart', JSON.stringify(totalOrder));
  //   }
  // }, [totalOrder]);

  const deleteItem = id => {
    const filteredArray = totalOrder.filter(item => item.id !== id);
    setTotalOrder(filteredArray);
    localStorage.setItem('cart', JSON.stringify(totalOrder));
    // setTotalOrder(JSON.parse(`${localStorage.getItem('cart')}`));
  };

  return (
    <>
      <main>
        <Heading heading={'Кошик'} />
        {totalOrder.length > 0 && (
          <>
            <ul>
              {totalOrder.map(({ id, photo, title, quantity, totalPrice }) => {
                return (
                  <li key={nanoid()}>
                    <Image
                      src={photo}
                      alt="item photo"
                      width={50}
                      height={50}
                    />
                    <p>{title}</p>
                    <p>{quantity}</p>
                    <p>{totalPrice} грн</p>
                    <IconButton
                      onClick={() => deleteItem(id)}
                      color="primary"
                      aria-label="delete"
                    >
                      <CancelIcon />
                    </IconButton>
                  </li>
                );
              })}
            </ul>
            <form>
              <TextField id="outlined-basic" label="Ім'я" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Номер телефону"
                variant="outlined"
              />
              <FormControlLabel control={<Checkbox />} label="Доставка" />
              <label htmlFor="comment">Коментар</label>
              <textarea
                id="comment"
                rows="4"
                cols="50"
                resize="none"
              ></textarea>
              <p>До оплати:</p>
              <Button type="submit" variant="contained">
                Підтвердити замовлення
              </Button>
            </form>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
