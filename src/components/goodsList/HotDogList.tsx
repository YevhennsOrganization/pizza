import GoodsList from '@/components/goodsList/GoodsList';

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

const HotDogList: React.FC<TypeGoodsList> = (data, getCurrentItem) => {
  return GoodsList(data, getCurrentItem);
};

export default HotDogList;
