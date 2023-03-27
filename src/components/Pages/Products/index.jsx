import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../../utils/constants';
import { CardList } from '../../Card/CardList';
import { Menu } from '../../Menu';
import { useCallback } from 'react';
import styles from './products.module.css';
import { token } from '../../../utils/constants';

export const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) navigate('/signin');
  }, [navigate]);

  const [prod, setProd] = useState([]);
  const [res, setRes] = useState(true);

  //делаем запрос и получаем весь список товаров и упаковываем в prod
  const fetchData = useCallback(async () => {
    const res = await fetch('https://api.react-learning.ru/products', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    setRes(res.ok);
    if (res.ok) {
      const responce = await res.json();
      setProd(responce.products);
    } else {
      return <p>dsdasdasdasdasd</p>;
    }
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

  // console.log(prod);

  //отправляем сортировку в меню, где расположены все кнопки
  //а список товаров в лист
  return (
    <div className={styles.body}>
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
