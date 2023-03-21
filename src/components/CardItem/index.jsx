// import { useState, useEffect, useCallback } from 'react';
import style from './carditem.module.css';

export const CardItem = ({ prod, pop }) => {
  const totalPrice = prod.discount ? prod.price - (prod.price * prod.discount) / 100 : prod.price;
  // console.log(prod);
  // console.log(pop);
  const ratSum = pop.reduce((acc, cur) => acc + cur, 0);
  const ratLength = pop.length;
  const rat = Math.round(ratSum / ratLength);
  pop = rat ? rat : 0;
  prod.avgRating = rat ? rat : 0;

  return (
    <>
      <div className={style.product_card}>
        {prod.discount > 0 && <div className={style.badge}>{prod.discount}%</div>}
        <div className={style.product_tumb}>
          <img src={prod.pictures} alt="" />
          <div className={style.rat}>{rat > 0 ? rat : ''}</div>
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
