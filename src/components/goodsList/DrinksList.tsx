import React from 'react';
import GoodsList from '@/components/goodsList/GoodsList';

const DrinksList: React.FC<TGoodsList> = (data, getCurrentItem) => {
  return GoodsList(data, getCurrentItem);
};

export default DrinksList;
