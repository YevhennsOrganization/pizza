import React, { FC } from 'react';
import css from './LoaderModal.module.scss';
import Loader from '../Loader/Loader';

const LoaderModal: FC = () => {
  return (
    <div className={css.modalWrapper}>
      <div className={css.loaderWrapper}>
        <Loader />
      </div>
    </div>
  );
};

export default LoaderModal;
