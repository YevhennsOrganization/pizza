import Image from 'next/image';
import css from './GoodsList.module.css';

type TypeGoodsList = {
  data: {
    _id: string;
    title: string;
    description: string;
    dimension: string;
    price: number;
    photo: string;
  }[];
  getCurrentItem: (_id: string) => void;
};

const GoodsList: React.FC<TypeGoodsList> = ({ data, getCurrentItem }) => {
  return (
    <ul className={css.list}>
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li
            key={_id}
            className={css.listItem}
            onClick={() => getCurrentItem(_id)}
          >
            <Image src={photo} alt="item photo" width={96} height={96} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{dimension}</p>
            <p>{price} грн</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;
