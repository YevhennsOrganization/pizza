import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import css from './GoodsList.module.scss';

interface Props {
  data: TChosenGood[];
  getCurrentItem: (_id: string) => void;
}

const GoodsList: React.FC<Props> = ({ data, getCurrentItem }) => {
  return (
    <ul className={css.list}>
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li
            key={_id}
            className={css.listItem}
            onClick={() => getCurrentItem(_id)}
          >
            <button type="button" className={css.favorite}>
              <AiOutlineHeart
                style={{
                  fontSize: '34',
                }}
              />
            </button>
            <Image src={photo} alt="item photo" width={200} height={200} />
            <div className={css.info}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{dimension}</p>
            </div>
            <p className={css.price}>{price} грн</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;
