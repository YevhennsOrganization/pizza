import { useState } from 'react';
import Heading from '@/components/heading/Heading';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilledCart, deleteItem, deleteAllItems } from '@/redux/cartSlice';
import CartForm from '@/components/cartForm/CartForm';
import CartListItem from '@/components/cartListItem/CartListItem';
import Button from '@mui/material/Button';
import Image from 'next/image';
import FinalModal from '@/components/finalModal/FinalModal';
import { Container } from '@/components/container/Container';
import { Section } from '@/components/section/Section';

const Cart: React.FC = () => {
  const [open, setOpen] = useState(false as boolean);

  const dispatch = useDispatch();
  const filledCart = useSelector(getFilledCart);

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const openModal = () => {
    setOpen(!open);
  };
  const finalAction = () => {
    dispatch(deleteAllItems());
    setOpen(!open);
  };

  return (
    <Section>
      <Container>
        <Heading heading={'Кошик'} />
        {filledCart.length > 0 ? (
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
            <CartForm openModal={openModal} />
          </>
        ) : (
          <>
            <Image src={'/empty.png'} alt="empty" width={236} height={257} />
            <p>Кошик порожній!</p>
          </>
        )}
        {open && <FinalModal open={open} finalAction={finalAction} />}
      </Container>
    </Section>
  );
};

export default Cart;
