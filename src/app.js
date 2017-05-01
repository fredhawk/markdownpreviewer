import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepPurple300,
  deepPurple500,
  deepPurple700
} from 'material-ui/styles/colors';
import css from './style.scss';
import Header from './Header';
import Previewer from './Previewer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple300,
    primary3Color: deepPurple700
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <Previewer />
    </div>
  </MuiThemeProvider>,
  document.getElementById(`root`)
);
