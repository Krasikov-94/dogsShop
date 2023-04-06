import styles from './signup.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../../redux/slices/userSlice';

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .required('Пароль является обязательным'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .min(8, 'Минимальная длина пароля 8 символов')
    .required('Пароль является обязательным'),
});

export const SignUp = () => {
  // const users = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onSubmit = (values) => {
    // console.log(values);
    dispatch(setUsers(values));
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

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

          <Field
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmPassword"
            type="password"
            className={styles.inp}
          />
          <ErrorMessage name="confirmPassword" />
          <button type="submit">Зарегистрировать</button>
        </Form>
      </Formik>
    </div>
  );
};
