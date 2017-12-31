/**
*
* Chime
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import './index.css'

const Self = styled.div`
  text-align: center;
`;

function Chime(props) {
  const classes = [];
  if (props.renderBottomTwine) classes.push("with-bottom-twine");
  if (props.renderTopTwine) classes.push("with-top-twine");

  const src = `chime-${props.chimeStyle}.svg`;

  return (
    <Self className={classes.join(" ")}>
      <img src={src} />
    </Self>
  );
}

Chime.defaultProps = {
  renderTopTwine: false,
  renderBottomTwine: false,
};

Chime.propTypes = {
  chimeStyle: PropTypes.string,
  renderBottomTwine: PropTypes.bool,
  renderTopTwine: PropTypes.bool,
};

export default Chime;
