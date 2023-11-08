export const filterByCategory = (
  data: TChosenProductsArr,
  category: string
) => {
  return data.filter((item: TChosenProduct) => item.category === category);
};
