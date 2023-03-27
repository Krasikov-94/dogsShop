import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.logo}>
        <FontAwesomeIcon icon={faPaw} className={style.logo} />
        <h1>DogFood</h1>
      </div>
      <div className={style.cat1}>
        <ul className={style.list1}>
          <li>
            <a href="#1">Каталог</a>
          </li>
          <li>
            <a href="#1">Акция</a>
          </li>
          <li>
            <a href="#1">Новости</a>
          </li>
          <li>
            <a href="#1">Отзывы</a>
          </li>
        </ul>
      </div>
      <div className={style.cat2}>
        <ul className={style.list2}>
          <li>
            <a href="#1">Оплата и доставка</a>
          </li>
          <li>
            <a href="#1">Часто спрашивают</a>
          </li>
          <li>
            <a href="#1">Обратная связь</a>
          </li>
          <li>
            <a href="#1">Контакты</a>
          </li>
        </ul>
      </div>
      <div className={style.cat3}>
        <ul className={style.list3}>
          <li>
            <h1>Мы на связи</h1>
          </li>
          <li>
            <a href="tel:+7 999 00 00 00">+7 412 00 00 0</a>
          </li>
          <li>
            <p>trololo@gmail.com</p>
          </li>
          <li>
            <a href="#1" onClick={() => localStorage.clear()}>
              LOGO
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const MemoFooter = React.memo(Footer);
