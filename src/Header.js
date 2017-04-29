import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import { blue50 } from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
  marginTop: 12,
  paddingLeft: 15
};

const Header = () => {
  return (
    <AppBar
      title="Markdown Previewer"
      iconElementLeft={<ActionHome style={iconStyles} color={blue50} />}
    />
  );
};

export default Header;
