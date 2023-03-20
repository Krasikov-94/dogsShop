import React, { useContext } from 'react';
import { FirstContext } from '../../layout';
import style from './menu.module.css';

export const Menu = () => {
  const j = 'abba';
  const s = 'bbc';

  console.log(
    s
      .split('')
      .filter((char) => j.includes(char))
      .join(''),
  );

  const { state, inc } = useContext(FirstContext);
  return (
    <div className={style.body}>
      <h1>{state}</h1>
      <h1>Hello Bro use Context</h1>
      <button onClick={inc}>+</button>
    </div>
  );
};
