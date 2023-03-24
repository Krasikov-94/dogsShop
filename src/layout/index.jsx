import React from 'react';
import { Outlet } from 'react-router-dom';
import { MemoFooter } from './Footer';
import { MemoHeader } from './Header';

export const Layout = () => {
  return (
    <>
      <div>
        <MemoHeader />
        <Outlet />
        <MemoFooter />
      </div>
    </>
  );
};
