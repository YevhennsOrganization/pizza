import React from 'react';
import GoodsList from '@/components/goodsList/GoodsList';

const PizzaList: React.FC<TGoodsList> = (data, getCurrentItem) => {
  return GoodsList(data, getCurrentItem);
};

export default PizzaList;
