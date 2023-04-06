import React from 'react';
import style from './menu.module.css';

export const Menu = ({ popularM, minM, maxM, ratM, saleM }) => {
  return (
    <div className={style.body}>
      <ul className={style.ul}>
        <li className={style.li}>
          <button className={style.btn} onClick={popularM}>
            Популярные
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn}>Новинки</button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={minM}>
            Сначала дешевые
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={maxM}>
            Сначала дорогие
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={ratM}>
            По рейтингу
          </button>
        </li>
        <li className={style.li}>
          <button className={style.btn} onClick={saleM}>
            По скидке
          </button>
        </li>
      </ul>
    </div>
  );
};
