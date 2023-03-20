import React, { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const FirstContext = React.createContext();

export const Layout = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState((prev) => prev + 1);
  };

  const exp = {
    state,
    setState,
    inc,
  };
  console.log(1);
  return (
    <>
      <Header />
      <FirstContext.Provider value={exp}>
        <Main />
      </FirstContext.Provider>
      <Footer />
    </>
  );
};
