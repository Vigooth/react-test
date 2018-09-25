import React from 'react';
import { Home } from '../../pages/home/Home';
import { Footer } from "../../layouts/footer/Footer";
import Header from '../../layouts/header/Header';
import Templates from "../../templates/Templates";

export const App = () => {
  return (
    <Templates>
      <Header/>
      <Home/>
      <Footer/>
    </Templates>

  );
};
