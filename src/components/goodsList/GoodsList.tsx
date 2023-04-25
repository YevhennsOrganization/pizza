import Image from "next/image";

const GoodsList = (data) => {
  return (
    <ul>
      {data.map(({ _id, title, description, dimension, price, photo }) => {
        return (
          <li key={_id}>
            <Image src={photo} alt="good photo" width={96} height={96} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{dimension}</p>
            <p>{price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GoodsList;
