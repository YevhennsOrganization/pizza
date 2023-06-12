import React from 'react';
import ChosenItem from './ChosenItem';

const ChosenDrink: React.FC<TChosenItem> = ({
  open,
  handleClose,
  currentItem,
}: TChosenItem) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenDrink;
