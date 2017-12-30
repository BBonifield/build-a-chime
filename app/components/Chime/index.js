/**
*
* Chime
*
*/

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

import './index.css'


function Chime(props) {
  const classes = [ `chime-style-${props.chimeStyle}` ];

  if (props.renderBottomTwine) classes.push("with-bottom-twine");
  if (props.renderTopTwine) classes.push("with-top-twine");

  return (
    <div className={classes.join(" ")}>chime: {props.chimeStyle}</div>
  );
}

Chime.defaultProps = {
  renderTopTwine: true,
  renderBottomTwine: true,
};

Chime.propTypes = {
  chimeStyle: PropTypes.string,
  renderBottomTwine: PropTypes.bool,
  renderTopTwine: PropTypes.bool,
};

export default Chime;
