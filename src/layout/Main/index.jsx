import React from 'react';
import { CardList } from '../../components/CardList';
import { Menu } from '../../components/Menu';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from './main.module.css';
console.log(1);
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4ZDYiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.v2N78pPT2PW-quidPM16_bB_y59EKagCnnN6wHRDvB8';

export const Main = () => {
  const [prod, setProd] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await fetch('https://api.react-learning.ru/products', {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    });
    const responce = await res.json();
    console.log(responce.products);
    setProd(responce.products);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles}>
      <Menu />
      <CardList prod={prod} />
    </div>
  );
};
