import React from 'react';
import ChosenItem from './ChosenItem';

interface Props {
  open: boolean;
  handleClose: () => void;
  currentItem: TChosenGood;
}

const ChosenHotDog: React.FC<Props> = ({
                                         open,
                                         handleClose,
                                         currentItem,
                                       }) => {
  return ChosenItem({ open, handleClose, currentItem });
};

export default ChosenHotDog;
