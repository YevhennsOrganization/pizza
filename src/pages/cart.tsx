import Heading from '@/components/heading/Heading';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, getFilledCart, deleteItem } from '@/redux/cartSlice';
import CartForm from '@/components/cartForm/CartForm';
import CartListItem from '@/components/cartListItem/CartListItem';
import Button from '@mui/material/Button';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const filledCart = useSelector(getFilledCart);

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const deleteAll = () => {
    dispatch(clearAll());
  };

  return (
    <>
      <main>
        <Heading heading={'Кошик'} />
        {filledCart.length > 0 && (
          <>
            <ul>
              {filledCart.map(({ id, photo, title, quantity, totalPrice }) => {
                return (
                  <CartListItem
                    deleteCartItem={deleteCartItem}
                    key={nanoid()}
                    id={id}
                    photo={photo}
                    title={title}
                    quantity={quantity}
                    totalPrice={totalPrice}
                  />
                );
              })}
            </ul>
          </>
        )}
        <CartForm />
        <Button onClick={deleteAll} variant="contained">
          Очистити кошик
        </Button>
      </main>
    </>
  );
};

export default Cart;
