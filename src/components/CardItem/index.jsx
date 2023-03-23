// import { useState, useEffect, useCallback } from 'react';
import style from './carditem.module.css';

export const CardItem = ({ prod, pop }) => {
  //цена с учетом скидки
  const totalPrice = prod.discount ? prod.price - (prod.price * prod.discount) / 100 : prod.price;

  //для сортировки по среднему рейтингу
  const ratSum = pop.reduce((acc, cur) => acc + cur, 0);
  const ratLength = pop.length;
  const rat = Math.round(ratSum / ratLength);
  pop = rat ? rat : 0;
  prod.avgRating = rat ? rat : 0;

  //звезды рейтинга
  const ratStar = (rat) => {
    const star = (
      <svg
        className={style.svg}
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
      </svg>
    );
    if (rat === 0) {
      return '';
    } else if (rat === 1) {
      return (
        <p className={style.rat} aria-label="Rating is 4.5 out of 5" style={{ color: '#fffc95' }}>
          {star}
        </p>
      );
    } else if (rat === 2) {
      return (
        <p className={style.rat} aria-label="Rating is 4.5 out of 5">
          {star}
          {star}
        </p>
      );
    } else if (rat === 3) {
      return (
        <p className={style.rat} aria-label="Rating is 4.5 out of 5">
          {star}
          {star}
          {star}
        </p>
      );
    } else if (rat === 4) {
      return (
        <p className={style.rat} aria-label="Rating is 4.5 out of 5">
          {star}
          {star}
          {star}
          {star}
        </p>
      );
    } else if (rat === 5) {
      return (
        <p className={style.rat} aria-label="Rating is 4.5 out of 5">
          {star}
          {star}
          {star}
          {star}
          {star}
        </p>
      );
    }
  };

  //карточка товара
  return (
    <>
      <div className={style.product_card}>
        {prod.discount > 0 && <div className={style.badge}>{prod.discount}%</div>}
        <div className={style.product_tumb}>
          <img src={prod.pictures} alt="" />
          {ratStar(rat)}
        </div>
        <div className={style.product_details}>
          <span className={style.product_catagory}>{prod.wight}</span>
          <div className={style.name}>
            <h4>{prod.name}</h4>
          </div>
          <hr />
          <p className={style.desc}>{prod.description}</p>
          <div className={style.product_bottom_details}>
            <div className={style.stock}>{prod.stock}шт.</div>
            <div className={style.product_price}>{totalPrice} р.</div>
            <div className={style.product_links}>
              <button className={style.btn}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
