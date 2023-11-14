import Image from 'next/image';
import React, { FC } from 'react';
import css from './ProductDescription.module.scss';

interface Props {
  photo: string;
  title: string;
  description: string;
  dimension: string;
}

const ProductDescription: FC<Props> = ({
  photo,
  title,
  description,
  dimension,
}) => {
  return (
    <div className={css.descriprionWrapper}>
      <Image
        src={photo}
        alt="item photo"
        width={200}
        height={200}
        priority={true}
      />
      <div className={css.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{dimension}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
