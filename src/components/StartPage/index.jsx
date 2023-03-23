import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './startpage.module.css';

export const StartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.body}>
        <p>Добро пожаловать в магазин</p>
        <button onClick={() => navigate('/prod')}>На главную страницу</button>
      </div>
    </>
  );
};
