export const myInitialState = {
  user: [],
  token: '',
};

export const getInitState = () => {
  const lc_store = localStorage.getItem('reduxState');

  return lc_store ? JSON.parse(lc_store) : myInitialState;
};
