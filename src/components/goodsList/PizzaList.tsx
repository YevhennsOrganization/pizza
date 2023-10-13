import React from 'react';
import GoodsList from '@/components/goodsList/GoodsList';

interface Props {
  data: TChosenGood[];
  getCurrentItem: (_id: string) => void;
}

const PizzaList: React.FC<Props> = (data, getCurrentItem) => {
  return GoodsList(data, getCurrentItem);
};

export default PizzaList;
