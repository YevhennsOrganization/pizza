import React, { FC, useEffect, useState } from 'react';
import Empty from '@/components/Empty/Empty';
import CartForm from '@/components/CartForm/CartForm';
import CartList from '@/components/CartList/CartList';

interface Props {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
  deleteAllProducts: () => void;
  openModal: () => void;
}

const CartContent: FC<Props> = ({
  filledCart,
  deleteCartItem,
  deleteAllProducts,
  openModal,
}) => {
  const [totalPayment, setTotalPayment] = useState(0);

  const order: TOrdered = filledCart.map(item => {
    return {
      title: item.title,
      quantity: item.quantity,
    };
  });

  useEffect(() => {
    const result = filledCart
      .map((element: { totalPrice: number }) => element.totalPrice)
      .reduce((acc: number, val: number) => acc + val, 0);
    setTotalPayment(result);
  }, [filledCart]);

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
