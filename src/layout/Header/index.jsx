import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './header.module.css';
import { Link } from 'react-router-dom';

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
        <FontAwesomeIcon icon={faPaw} className={style.logo} />
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
          <Link to="/favorites">
            <FontAwesomeIcon
              icon={faHeart}
              className={style.heart}
              onClick={() => console.log('HEART')}
            />
          </Link>
          <Link to="/sort">
            <FontAwesomeIcon
              icon={faBagShopping}
              className={style.shop}
              onClick={() => console.log('SORT')}
            />
          </Link>
          <Link to="/prod">
            <FontAwesomeIcon
              icon={faDog}
              className={style.dog}
              onClick={() => console.log('DOG')}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export const MemoHeader = React.memo(Header);
