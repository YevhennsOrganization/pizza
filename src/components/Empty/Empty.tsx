import React, { FC } from 'react';
import Image from 'next/image';
import css from './Empty.module.scss';

interface Props {
  text: string;
}

const Empty: FC<Props> = ({ text }) => {
  return (
    <div className={css.emptyCart}>
      <Image
        src={'/empty.png'}
        alt="empty"
        width={236}
        height={257}
        priority={true}
      />
      <p>{text}</p>
    </div>
  );
};

export default Empty;
