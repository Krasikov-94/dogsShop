import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './startpage.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const nameSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().default(() => new Date()),
});

export const StartPage = () => {
  const [table, setTable] = useState([]);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    setTable(values);
  };

  const initialValues = {
    name: '',
    email: '',
    isPriority: false,
    date: new Date(),
  };

  console.log(table);
  return (
    <>
      <div className={style.body}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={nameSchema}>
          <Form className={style.form}>
            <Field className={style.f} id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" />
            <Field
              className={style.f}
              id="email"
              name="email"
              placeholder="xxx@xxx.com"
              type="email"
            />
            <ErrorMessage name="email" />
            <label className={style.label}>
              <Field
                className={style.f}
                id="isPriority"
                name="isPriority"
                placeholder="isPriority"
                type="checkbox"
              />
              Запомнить?
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
