import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiDatadog } from 'react-icons/si';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';

const Header = () => {
  const [inp, setInp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInp(inp);
    console.log(inp);
    const ads = async () => {
      const as = await fetch(`https://api.react-learning.ru/products/search?query=${inp}`);
      console.log(as);
      const resp = await as.json();
      console.log(resp);
    };
    ads();
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
          <NavLink to="/users" className={({ isActive }) => (isActive ? style.active : '')}>
            <BsFillPersonFill className={style.person} />
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? style.active : '')}>
            <BsFillChatSquareHeartFill className={style.heart} />
          </NavLink>
          <NavLink to="/sort" className={({ isActive }) => (isActive ? style.active : '')}>
            <FaShoppingBasket className={style.shop} />
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
            <SiDatadog className={style.dog} />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export const MemoHeader = React.memo(Header);
