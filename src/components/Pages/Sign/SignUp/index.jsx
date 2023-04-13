import styles from './signup.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../../redux/slices/userSlice';
import { useMutation } from '@tanstack/react-query';
import { TOKEN } from '../../../../utils/constants';
import { useNavigate } from 'react-router-dom';

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .required('Пароль является обязательным'),
});

export const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await mutateAsync(values);
  };

  const initialValues = {
    email: '',
    password: '',
    group: 'group-11',
  };

  const { mutateAsync, isError, isLoading, error } = useMutation({
    mutationKey: 'users',
    mutationFn: async (user) => {
      const res = await fetch('https://api.react-learning.ru/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const response = await res.json();
      localStorage.setItem(TOKEN, response.token);
      return response.data;
    },
    onSuccess: () => {
      navigate('/users');
    },
  });

  return (
    <div className={styles.body}>
      <h1>Регистрация</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signupSchema}>
        <Form className={styles.form}>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" className={styles.inp} />
          <ErrorMessage name="email" />
          <label htmlFor="password">Пароль</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className={styles.inp}
          />
          <ErrorMessage name="password" />
          <button type="submit">Зарегистрировать</button>
        </Form>
      </Formik>
    </div>
  );
};
