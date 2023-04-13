import React from 'react';
import { useSelector } from 'react-redux';

export const Favorites = () => {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const token = useSelector((state) => state.token);
  console.log(token);
  return (
    <div>
      <h1>{token}</h1>
      {/* <div>
        <div>
          <h1>{user.about}</h1>
          <button>Редактировать</button>
          <h1>Ваше имя: {user.name}</h1>
          <button>Редактировать</button>
          <h1>Ваша группа: {user.group}</h1>
          <h1>Ваша почта: {user.email}</h1>
          <h1>Ваш id: {user._id}</h1>
          <h1>версия: {user.__v}</h1>
        </div>
        <div>
          <button>Редактировать</button>
        </div>
      </div> */}
    </div>
  );
};
