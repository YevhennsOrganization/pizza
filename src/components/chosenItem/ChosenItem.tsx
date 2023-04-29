import Image from 'next/image';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import css from './ChosenItem.module.css';

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

const ChosenItem: React.FC<props> = ({ open, handleClose, currentItem }) => {
  const { title, description, dimension, price, photo } = currentItem;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Image src={photo} alt="item photo" width={96} height={96} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{dimension}</p>
        <p>{price} грн</p>
        <IconButton color="primary" aria-label="minus">
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton color="primary" aria-label="plus">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={handleClose} color="primary" aria-label="close">
          <CancelIcon />
        </IconButton>
      </div>
    </Modal>
  );
};

export default ChosenItem;
