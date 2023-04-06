import { useQuery } from '@tanstack/react-query';
import { TOKEN } from '../utils/constants';

const token = localStorage.getItem(TOKEN);

const allProd = async () => {
  const res = await fetch('https://api.react-learning.ru/products', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const responce = await res.json();
  return responce;
};

export const useProducts = () => {
  const {
    data: prod,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: allProd,
  });
  return { prod, isError, error, isLoading };
};
