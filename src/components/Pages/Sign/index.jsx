import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signInFetch } from '../../../api/user';
import { TOKEN } from '../../../utils/constants';
import style from './signin.module.css';

const signSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const Sign = () => {
  const navigate = useNavigate();

  const [state, setstate] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) navigate('/products');
  }, [navigate]);

  const onSubmit = async (values) => {
    console.log(values);
    const res = await signInFetch(values);
    if (res.ok) {
      const response = await res.json();
      setstate(response.data);
      console.log(response.data);
      localStorage.setItem(TOKEN, response.token);
      return navigate('/products');
    }
  };
  const initialValues = {
    email: '',
    password: '',
  };
  return (
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
  );
};
