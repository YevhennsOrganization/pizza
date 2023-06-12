import React from 'react';
import ChosenItem from './ChosenItem';

const ChosenPizza: React.FC<TChosenItem> = ({
  open,
  handleClose,
  currentItem,
}) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenPizza;
