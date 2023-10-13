import React from 'react';
import ChosenItem from './ChosenItem';

interface Props {
  open: boolean;
  handleClose: () => void;
  currentItem: TChosenGood;
}

const ChosenPizza: React.FC<Props> = ({
  open,
  handleClose,
  currentItem,
}) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenPizza;
