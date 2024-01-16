import React, { FC, useState } from 'react';
import Heading from '@/UI/basic/Heading/Heading';
import CartContent from '@/modules/Cart/CartContent';
import FinalModal from '@/components/FinalModal/FinalModal';
import PagesWrapper from '@/components/PagesWrapper/PagesWrapper';
import { useAppDispatch } from '@/redux/hooks';
import { deleteAllItems } from '@/redux/cart/cartSlice';
import css from '../styles/pages/Cart.module.scss';

const Cart: FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const openModal = () => {
    setOpen(true);
  };

  const deleteAllProducts = () => {
    dispatch(deleteAllItems());
    setOpen(false);
  };

  return (
    <PagesWrapper title="Nostra pizza - Кошик">
      <div className={css.cartWrapper}>
        <Heading>Кошик</Heading>
        <CartContent
          deleteAllProducts={deleteAllProducts}
          openModal={openModal}
        />
        {open && <FinalModal finalAction={deleteAllProducts} />}
      </div>
    </PagesWrapper>
  );
};

export default Cart;
