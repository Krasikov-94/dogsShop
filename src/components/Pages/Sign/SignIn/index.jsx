// import { useMutation } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setUsers } from '../../../../redux/slices/userSlice';
import { TOKEN } from '../../../../utils/constants';
import style from './signin.module.css';

const signSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .required('Пароль является обязательным'),
});

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) navigate('/users');
  }, [navigate]);

  const onSubmit = async (user) => {
    const res = await mutateAsync(user);
  };

  // const signInFetch = async (values) => {
  //   console.log(values);
  //   const res = await fetch('https://api.react-learning.ru/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const response = await res.json();
  //   localStorage.setItem(TOKEN, response.token);
  //   console.log(response.data);
  //   return response;
  // };
  const { mutateAsync, isError, isLoading, error } = useMutation({
    mutationKey: 'users',
    mutationFn: async (user) => {
      const res = await fetch('https://api.react-learning.ru/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const response = await res.json();
      dispatch(setUsers(response.data));
      localStorage.setItem(TOKEN, response.token);
      return response.data;
    },
    onSuccess: () => {
      navigate('/users');
    },
  });

  // const onSubmit = async (values) => {
  //   const res = await signInFetch(values);
  //   if (res.ok) {
  //     const response = await res.json();
  //     localStorage.setItem(TOKEN, response.token);
  //     // console.log(response.data);
  //     dispatch(setUsers(response.data));
  //     return navigate('/products');
  //   } else {
  //     <div>
  //       <h1>Не сегодня</h1>
  //     </div>;
  //   }
  // };
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <div className={style.body}>
        <h1>Войти</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signSchema}>
          <Form className={style.form}>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Email" className={style.inp} />
            <label htmlFor="password">Пароль</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
              className={style.inp}
            />
            <button type="submit" className={style.btn}>
              Войти
            </button>
          </Form>
        </Formik>
        <p>Если не зарегистрирован</p>
        <Link className={style.btn} to="/signup">
          Зарегистрировать
        </Link>
      </div>
    </>
  );
};
