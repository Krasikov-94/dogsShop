import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [inp, setInp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInp(inp);
    console.log(inp);
  };

  return (
    <div className={style.header}>
      <div className={style.logoName}>
        <nav>
          <NavLink to={'/products'} className={({ isActive }) => (isActive ? style.active : '')}>
            <FontAwesomeIcon icon={faPaw} className={style.logo} />
          </NavLink>
        </nav>
        <h1>DogFood</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={inp}
          type="text"
          className={style.input}
          placeholder="product name"
          onChange={(event) => setInp(event.target.value)}
        />
      </form>
      <div className={style.heartShopDog}>
        <nav>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? style.active : '')}>
            <FontAwesomeIcon
              icon={faHeart}
              className={style.heart}
              onClick={() => console.log('HEART')}
            />
          </NavLink>
          <NavLink to="/sort" className={({ isActive }) => (isActive ? style.active : '')}>
            <FontAwesomeIcon
              icon={faBagShopping}
              className={style.shop}
              onClick={() => console.log('SORT')}
            />
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
            <FontAwesomeIcon
              icon={faDog}
              className={style.dog}
              onClick={() => console.log('DOG')}
            />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export const MemoHeader = React.memo(Header);
