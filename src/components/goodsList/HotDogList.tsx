import React from 'react';
import GoodsList from '@/components/goodsList/GoodsList';

const HotDogList: React.FC<TGoodsList> = (data, getCurrentItem) => {
  return GoodsList(data, getCurrentItem);
};

export default HotDogList;
