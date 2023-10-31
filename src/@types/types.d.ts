type TChosenProduct = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
  category: string;
  promotion: boolean;
};

type TInfo = {
  address?: string | undefined;
  comment?: string | undefined;
  delivery: boolean;
  name: string;
  number: string;
  sum: number;
};

type TCartItem = {
  id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
};

type TCart = CartItem[];

type TSummary = {
  customerInfo: TInfo;
  payment: TCart;
};
