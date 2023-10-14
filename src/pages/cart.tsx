import React, {useState} from 'react';
import Heading from '@/components/Heading/Heading';
import {nanoid} from 'nanoid';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getFilledCart, deleteItem, deleteAllItems} from '@/redux/cartSlice';
import CartForm from '@/components/CartForm/CartForm';
import CartListItem from '@/components/CartListItem/CartListItem';
import Image from 'next/image';
import FinalModal from '@/components/FinalModal/FinalModal';
import {Container} from '@/components/Container/Container';
import {Section} from '@/components/section/Section';
import css from '../styles/Cart.module.scss'

const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);

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
        <div className={css.cartWrapper}
        >
          <Heading>Кошик</Heading>
          {filledCart.length > 0 ? (
            <>
              <ul>
                {filledCart.map(
                  (data) => {
                    return (
                      <CartListItem
                        deleteCartItem={deleteCartItem}
                        key={nanoid()}
                        data={data}
                      />
                    );
                  },
                )}
              </ul>
              <CartForm openModal={openModal}/>
            </>
          ) : (
            <>
              <Image src={'/empty.png'} alt='empty' width={236} height={257}/>
              <p>Кошик порожній!</p>
            </>
          )}
          {open && <FinalModal open={open} finalAction={finalAction}/>}
        </div>
      </Container>
    </Section>
  );
};

export default Cart;
