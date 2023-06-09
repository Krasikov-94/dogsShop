import { useQuery } from '@tanstack/react-query';
import { TOKEN } from '../utils/constants';

export const signInFetch = async (values) => {
  const res = await fetch('https://api.react-learning.ru/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const response = await res.json();
  localStorage.setItem(TOKEN, response.token);
  console.log(response.data);
  return response;
};
export const useSignInUser = (values) => {
  const {
    data: user,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: signInFetch(values),
  });
  return { user, isError, error, isLoading };
};
