import Image from 'next/image';
import css from './GoodsList.module.css';

const GoodsList = (
  data: {
    _id: string;
    title: string;
    description: string;
    dimension: string;
    price: number;
    photo: string;
  }[]
) => {
  return (
    <ul className={css.list}>
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li key={_id} className={css.listItem}>
            <Image src={photo} alt="good photo" width={96} height={96} />
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
