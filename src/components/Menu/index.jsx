import React from 'react';
import style from './menu.module.css';

export const Menu = ({ saleSort, popularSort, minPrice, maxPrice, ratSort }) => {
  return (
    <div className={style.body}>
      <ul className={style.ul}>
        <li className={style.li}>
          <button className={style.btn} onClick={popularSort}>
            Популярные
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn}>Новинки</button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={minPrice}>
            Сначала дешевые
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={maxPrice}>
            Сначала дорогие
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={ratSort}>
            По рейтингу
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={saleSort}>
            По скидке
          </button>
        </li>
      </ul>
    </div>
  );
};
