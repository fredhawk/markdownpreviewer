import React from 'react';
import PropTypes from 'prop-types';

const Showcase = (props) => {
  return (
    <div>
      {props.output}
    </div>
  );
};

Showcase.defaultProps = {
  output: `Write some Markdown.`
}

Showcase.propTypes = {
  output: PropTypes.string
}

export default Showcase;