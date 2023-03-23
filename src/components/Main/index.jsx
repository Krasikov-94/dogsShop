import React from 'react';
import { CardList } from '../CardList';
import { Menu } from '../Menu';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from './main.module.css';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4ZDYiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.v2N78pPT2PW-quidPM16_bB_y59EKagCnnN6wHRDvB8';

export const Main = () => {
  const [prod, setProd] = useState([]);

  //делаем запрос и получаем весь список товаров и упаковываем в prod
  const fetchData = useCallback(async () => {
    const res = await fetch('https://api.react-learning.ru/products', {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    });
    const responce = await res.json();
    setProd(responce.products);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  //сортировка по скидке
  const saleSort = () => {
    setProd([...prod.sort((a, b) => b.discount - a.discount)]);
  };

  //сортировка по самым популярным
  const popularSort = () => {
    setProd([...prod.sort((a, b) => b.likes.length - a.likes.length)]);
  };

  //сортировка по минимальной цене
  const minPrice = () => {
    setProd([
      ...prod.sort(
        (a, b) =>
          (a.discount ? a.price - (a.price * a.discount) / 100 : a.price) -
          (b.discount ? b.price - (b.price * b.discount) / 100 : b.price),
      ),
    ]);
  };

  //сортировка по максимальной цене
  const maxPrice = () => {
    setProd([
      ...prod.sort(
        (a, b) =>
          (b.discount ? b.price - (b.price * b.discount) / 100 : b.price) -
          (a.discount ? a.price - (a.price * a.discount) / 100 : a.price),
      ),
    ]);
  };

  //сортировка по среднему рейтингу
  const ratSort = () => {
    setProd([...prod.sort((a, b) => b.avgRating - a.avgRating)]);
  };

  console.log(prod);

  //отправляем сортировку в меню, где расположены все кнопки
  //а список товаров в лист
  return (
    <div className={styles}>
      <Menu
        saleSort={saleSort}
        popularSort={popularSort}
        minPrice={minPrice}
        maxPrice={maxPrice}
        ratSort={ratSort}
      />
      <CardList prod={prod} />
    </div>
  );
};
