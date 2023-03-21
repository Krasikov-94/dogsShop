import React, { useContext } from 'react';
import style from './menu.module.css';

export const Menu = ({ saleSort }) => {
  return (
    <div className={style.body}>
      <button className={style.btn}>Популярные</button>

      <button className={style.btn}>Новинки</button>

      <button className={style.btn}>Сначала дешевые</button>

      <button className={style.btn}>Сначала дорогие</button>

      <button className={style.btn}>По рейтингу</button>

      <button className={style.btn} onClick={() => saleSort()}>
        По скидке
      </button>
    </div>
  );
};
