export const filterByCategory = (data: TProductsArr, category: string) => {
  return data.filter((item: TProduct) => item.category === category);
};
