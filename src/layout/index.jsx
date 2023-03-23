import React from 'react';
import { Outlet } from 'react-router-dom';
import { MemoFooter } from './Footer';
import { MemoHeader } from './Header';
import style from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <div className={style.wrapper}>
        <MemoHeader className={style.header} />
        <Outlet className={style.main} />
        <MemoFooter className={style.footer} />
      </div>
    </>
  );
};
