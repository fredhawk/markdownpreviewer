import React from 'react';
import PropTypes from 'prop-types';

const Showcase = (props) => {
  return (
    <div dangerouslySetInnerHTML={{__html: props.output}} />
  );
};

Showcase.defaultProps = {
  output: `Write some Markdown.`
}

Showcase.propTypes = {
  output: PropTypes.string
}

export default Showcase;