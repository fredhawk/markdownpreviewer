import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.scss';
import Header from './Header';
import Footer from './Footer';
import Previewer from './Previewer';


ReactDOM.render(
  <div>
    <Header />
    <Previewer />
    <Footer />
  </div>,
  document.getElementById(`root`)
);
