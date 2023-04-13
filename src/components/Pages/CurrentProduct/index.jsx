import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './currentProduct.module.css';
import { TOKEN } from '../../../utils/constants';

export const CurrentProd = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (!token) navigate('/signin');
  }, [navigate, token]);

  const apiOneProd = 'https://api.react-learning.ru/products/';
  const { currentProd } = useParams();

  const { data: oneProd } = useQuery({
    queryKey: ['oneProd'],
    queryFn: async function oneProd() {
      try {
        const response = await axios.get(`${apiOneProd}${currentProd}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <>
      <div className={style.body}>
        <button className={style.exit} onClick={() => navigate(-1)}>
          Назад
        </button>
        {oneProd ? (
          <>
            <div className={style.general}>
              <h1>{oneProd.name}</h1>
              <div className={style.wrapper}>
                <div className={style.left}>
                  <p>Вес : {oneProd.wight}.</p>
                  <p>Цена : {oneProd.price} рублей</p>
                  <p>Скидка : {oneProd.discount}%</p>
                  <span>Описание : {oneProd.description}</span>
                </div>
                <div className={style.right}>
                  <img className={style.img} src={oneProd.pictures} alt={oneProd.name} />
                  <button className={style.btn}>Купить</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Данные загружаются.........</p>
        )}
      </div>
    </>
  );
};
// author: {name: 'ghost rider', about: 'hhhh', avatar: 'https://i.pinimg.com/564x/90/ce/8a/90ce8ad300a9d3696131dfbb823f47e6.jpg', _id: '622bd81b06c7d323b8ae4614', email: 'maxim_91@inbox.ru', …}
// available: true
// created_at: "2022-03-12T10:37:00.464Z"
// description: "Описание demo"
// discount: 0
// isPublished: true
// likes: (32) ['63ecfaf259b98b038f77b660', '63e12f6659b98b038f77b22d', '63e12a4559b98b038f77b221', '63fa15074ee419975fbd290e', '63e2589b59b98b038f77b299', '641758c7aa3971218392c4ae', '63e127e659b98b038f77b217', '640621e84ee419975fbd2dec', '63d1bc5859b98b038f77abe4', '63ee62853aa285034f78ab18', '63ea480d59b98b038f77b5b5', '6421f411aa39712183a1615e', '63e768c059b98b038f77b512', '63ecab9c59b98b038f77b633', '6404a8734ee419975fbd2d5e', '641edc67aa397121839c700d', '642478d5aa39712183a3dd15', '6425d079aa39712183a5102b', '64107e08aa397121838f28ba', '63f7c6e64ee419975fbd281d', '64107e08aa397121838f28a4', '6429e8d6aa39712183aad23c', '64107e09aa397121838f291e', '641acf9aaa3971218397608f', '64107e09aa397121838f2926', '64130aa4aa39712183907838', '64107e08aa397121838f28cc', '64107e09aa397121838f291c', '63ed527759b98b038f77b67f', '64107e09aa397121838f28ec', '63ef83a13aa285034f78ab85', '63e8a48959b98b038f77b52f']
// name: "Ломтики крольчатины"
// pictures: "https://react-learning.ru/image-compressed/3.jpg"
// price: 500
// reviews: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// stock: 10
// tags: []
// updated_at: "2023-04-08T07:07:10.329Z"
// wight: "100 г"
// __v: 0
// _id: "622c77cc77d63f6e70967d1e"
