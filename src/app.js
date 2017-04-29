import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import css from './style.scss';
import Header from './Header';
import Previewer from './Previewer';

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <Header />
      <Previewer />
    </div>
  </MuiThemeProvider>,
  document.getElementById(`root`)
);
