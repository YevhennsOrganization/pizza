type TFinalForm = {
  openModal: string;
  delivery: boolean;
  name: string;
  number: string;
  address?: string;
  comment?: string;
};

type TOpenModal = {
  openModal: () => void;
};

type TCartListItem = {
  id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
  deleteCartItem: (id: string) => void;
};

type TChosenGood = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
};

type TChosenItem = {
  open: boolean;
  handleClose: () => void;
  currentItem: TChosenGood;
};

type TFinalModal = {
  open: boolean;
  finalAction: () => void;
};

type TGoodsList = {
  data: {
    _id: string;
    title: string;
    description: string;
    dimension: string;
    price: number;
    photo: string;
  }[];
  getCurrentItem: (_id: string) => void;
};

type THeading = {
  heading: string;
};

type TLayout = {
  children: JSX.Element;
};

type TypeCartItem = {
  id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
};

type TypeCart = TypeCartItem[];

type TypeInfo = {
  address?: string;
  comment?: string;
  delivery: boolean;
  name: string;
  number: number;
  sum: number;
};
