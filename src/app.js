import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.scss';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

ReactDOM.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>,
  document.getElementById(`root`)
);