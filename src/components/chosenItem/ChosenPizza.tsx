import ChosenItem from './ChosenItem';

type props = {
  open: boolean;
  handleClose: () => void;
  currentItem: {
    _id: string;
    title: string;
    description: string;
    dimension: string;
    price: number;
    photo: string;
  };
};

const ChosenPizza = ({ open, handleClose, currentItem }: props) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenPizza;
