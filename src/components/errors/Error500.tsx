import React, { FC } from 'react';
import css from './Error500.module.scss';

const Error500: FC = () => {
  return (
    <div>
      <div className={css.modalWrapper}>
        <div className={css.modal}>
          <>
            <p className={css.resultText}>
              Помилка сервера!
              <br />
              Перезавантажте сторінку,
              <br />
              або завітайте пізніше
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Error500;
