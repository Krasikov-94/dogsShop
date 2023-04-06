//сортировка по скидке
export const saleSort = (products) => {
  // products = [...products.sort((a, b) => b.discount - a.discount)];
  products.sort((a, b) => b.discount - a.discount);
  return products;
};

//сортировка по самым популярным
export const popularSort = (products) => {
  products.sort((a, b) => b.likes.length - a.likes.length);
};

//сортировка по минимальной цене
export const minPrice = (products) => {
  products.sort(
    (a, b) =>
      (a.discount ? a.price - (a.price * a.discount) / 100 : a.price) -
      (b.discount ? b.price - (b.price * b.discount) / 100 : b.price),
  );
};

//сортировка по максимальной цене
export const maxPrice = (products) => {
  products.sort(
    (a, b) =>
      (b.discount ? b.price - (b.price * b.discount) / 100 : b.price) -
      (a.discount ? a.price - (a.price * a.discount) / 100 : a.price),
  );
};

//сортировка по среднему рейтингу
export const ratSort = (products) => {
  return products.sort((a, b) => b.avgRating - a.avgRating);
};
