import styles from './signup.module.css';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const signSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={styles.body}>
      <h1>Регистрация</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signSchema}>
        <Form className={styles.form}>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" className={styles.inp} />
          <label htmlFor="password">Пароль</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className={styles.inp}
          />
        </Form>
      </Formik>
      <Link to="/">Зарегистрировать</Link>
    </div>
  );
};
