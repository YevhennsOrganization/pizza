import React, { FC } from 'react';
import Empty from '@/components/Empty/Empty';
import CartForm from '@/components/CartForm/CartForm';
import CartList from '@/components/CartList/CartList';

interface Props {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
  deleteAllProducts: () => void;
  openModal: () => void;
  totalPayment: number;
  order: TOrdered;
}

const CartContent: FC<Props> = ({
  filledCart,
  deleteCartItem,
  deleteAllProducts,
  openModal,
  totalPayment,
  order,
}) => {
  return (
    <>
      {filledCart.length > 0 ? (
        <>
          <CartList
            filledCart={filledCart}
            deleteCartItem={deleteCartItem}
            deleteAllProducts={deleteAllProducts}
          />
          <CartForm
            openModal={openModal}
            totalPayment={totalPayment}
            order={order}
          />
        </>
      ) : (
        <Empty text={'Кошик порожній!'} />
      )}
    </>
  );
};

export default CartContent;
