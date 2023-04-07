import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../../utils/constants';
import styles from './users.module.css';

export const Users = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const navigate = useNavigate();

  const token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (!token) navigate('/signin');
  }, [navigate, token]);

  const exitBtn = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.p}>Личный кабинет</p>
        <div className={styles.content}>
          <div className={styles.body}>
            <h1>{user.about}</h1>
            <button className={styles.btn}>Редактировать</button>
            <h1>Ваше имя: {user.name}</h1>
            <button className={styles.btn}>Редактировать</button>
            <h1>Ваша группа: {user.group}</h1>
            <h1>Ваша почта: {user.email}</h1>
            <h1>Ваш id: {user._id}</h1>
            <h1>версия: {user.__v}</h1>
          </div>
          <div>
            <img className={styles.img} src={user.avatar} alt="dasd" />
            <button className={styles.btn}>Редактировать</button>
          </div>
        </div>
        <button className={styles.exit} onClick={exitBtn}>
          Выйти
        </button>
      </div>
    </>
  );
};
