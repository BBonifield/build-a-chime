/**
*
* ChimeTwine
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Self = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 100;
`;

function ChimeTwine(props) {
  const src = `chime-twine-${props.position}.svg`;
  return (
    <Self src={src} />
  );
}

ChimeTwine.propTypes = {
  position: PropTypes.string.isRequired,
};

export default ChimeTwine;
