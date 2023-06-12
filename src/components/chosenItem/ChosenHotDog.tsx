import React from 'react';
import ChosenItem from './ChosenItem';

const ChosenHotDog: React.FC<TChosenItem> = ({
  open,
  handleClose,
  currentItem,
}: TChosenItem) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenHotDog;
