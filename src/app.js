import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import css from './style.scss';
import Header from './Header';
import Footer from './Footer';
import Previewer from './Previewer';

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <Header />
      <Previewer />
      <Footer />
    </div>
  </MuiThemeProvider>,
  document.getElementById(`root`)
);
