import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../../utils/constants';
import styles from './users.module.css';
import axios from 'axios';
import { userApi } from '../../../api/user';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../redux/slices/tokenSlice';

export const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem(TOKEN);

  console.log(token);

  useEffect(() => {
    if (!token) navigate('/signin');
  }, [navigate, token]);

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async function users() {
      try {
        const response = await axios.get(userApi, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(response.token);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const exitBtn = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.p}>Личный кабинет</p>
        {users ? (
          <div className={styles.content}>
            <div className={styles.body}>
              <h1>{users.about}</h1>
              <button className={styles.btn}>Редактировать</button>
              <h1>Ваше имя: {users.name}</h1>
              <button className={styles.btn}>Редактировать</button>
              <h1>Ваша группа: {users.group}</h1>
              <h1>Ваша почта: {users.email}</h1>
              <h1>Ваш id: {users._id}</h1>
              <h1>версия: {users.__v}</h1>
            </div>
            <div>
              <img className={styles.img} src={users.avatar} alt="dasd" />
              <button className={styles.btn}>Редактировать</button>
            </div>
          </div>
        ) : (
          <p>Ваши данные загружаются......</p>
        )}
        <button className={styles.exit} onClick={exitBtn}>
          Выйти
        </button>
      </div>
    </>
  );
};
