import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../hooks/useAllProducts';
import { TOKEN } from '../../../utils/constants';
import { CardList } from '../../Card/CardList';
import { Menu } from '../../Menu';
import styles from './products.module.css';

export const Products = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (!token) navigate('/signin');
  }, [navigate, token]);

  // const [prod, setProd] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://api.react-learning.ru/products', {
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //       },
  //     });
  //     if (res.ok) {
  //       const responce = await res.json();
  //       setProd(responce.products);
  //     } else {
  //       return <p>dsdasdasdasdasd</p>;
  //     }
  //   };
  //   fetchData();
  // }, []);

  //сортировка по скидке
  const saleSort = () => {
    // products = [...products.sort((a, b) => b.discount - a.discount)];
    products.sort((a, b) => b.discount - a.discount);
    return products;
  };
  //сортировка по самым популярным
  const popularSort = () => {
    products.sort((a, b) => b.likes.length - a.likes.length);
    return products;
  };
  //сортировка по минимальной цене
  const minPrice = () => {
    products.sort(
      (a, b) =>
        (a.discount ? a.price - (a.price * a.discount) / 100 : a.price) -
        (b.discount ? b.price - (b.price * b.discount) / 100 : b.price),
    );
    return products;
  };
  //сортировка по максимальной цене
  const maxPrice = () => {
    products.sort(
      (a, b) =>
        (b.discount ? b.price - (b.price * b.discount) / 100 : b.price) -
        (a.discount ? a.price - (a.price * a.discount) / 100 : a.price),
    );
    return products;
  };
  //сортировка по среднему рейтингу
  const ratSort = () => {
    products.sort((a, b) => b.avgRating - a.avgRating);
    return products;
  };

  const client = useQueryClient();
  // делаем запрос и получаем весь список товаров и упаковываем в products

  // const {
  //   data: prod,
  //   isError,
  //   error,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: allProd,
  // });

  const { prod, isError, error, isLoading } = useProducts();
  console.log(prod, isError, error, isLoading);

  const { mutateAsync: saleM } = useMutation({
    mutationFn: saleSort,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['saleSort'] });
    },
  });
  const { mutateAsync: popularM } = useMutation({
    mutationFn: popularSort,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['popularSort'] });
    },
  });
  const { mutateAsync: minM } = useMutation({
    mutationFn: minPrice,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['minPrice'] });
    },
  });
  const { mutateAsync: maxM } = useMutation({
    mutationFn: maxPrice,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['maxPrice'] });
    },
  });
  const { mutateAsync: ratM } = useMutation({
    mutationFn: ratSort,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['ratSort'] });
    },
  });

  if (isError) return <p>Произошла ошибка: {error}</p>;

  if (isLoading) return <p>Загрузка...</p>;

  const products = prod.products;

  //отправляем сортировку в Menu, где расположены все кнопки
  //а список товаров в CardList
  return (
    <div className={styles.body}>
      <Menu
        saleM={saleM}
        products={products}
        popularM={popularM}
        minM={minM}
        maxM={maxM}
        ratM={ratM}
      />
      <CardList products={products} />
    </div>
  );
};
