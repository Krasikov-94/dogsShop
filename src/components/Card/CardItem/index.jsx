// import { useState, useEffect, useCallback } from 'react';
import style from './carditem.module.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

export const CardItem = ({ prod }) => {
  //цена с учетом скидки
  const totalPrice = prod.discount ? prod.price - (prod.price * prod.discount) / 100 : prod.price;

  //для сортировки по среднему рейтингу
  prod.avgRating = [];
  prod.reviews.map((p) => {
    prod.avgRating.push(p.rating);
  });
  const ratSum = prod.avgRating.reduce((acc, cur) => acc + cur, 0);
  const ratLength = prod.avgRating.length;
  const rat = Math.round(ratSum / ratLength);
  prod.avgRating = rat ? rat : 0;

  const currentProduct = (event) => {
    console.log(event.currentTarget);
  };

  //карточка товара
  return (
    <>
      <div className={style.product_card} onClick={(event) => currentProduct(event)}>
        {prod.discount > 0 && <div className={style.badge}>{prod.discount}%</div>}
        <div className={style.product_tumb}>
          <img src={prod.pictures} alt="" />
          <div className={style.rat}>
            <Star rat={rat} />
          </div>
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

//звезды рейтинга
const Star = ({ rat }) => {
  const ratingStart = Array.from({ length: 5 }, (elem, index) => {
    return <span key={index}>{rat >= index + 1 ? <FaStar /> : <AiOutlineStar />}</span>;
  });

  return <div>{ratingStart}</div>;
};
