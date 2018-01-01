/**
*
* Chime
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ChimeTwine from 'components/ChimeTwine';

const Self = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;

  img {
    width: 100px;
  }
`;

function Chime(props) {
  const src = `chime-${props.chimeStyle}.svg`;

  return (
    <Self>
      <img src={src} />
      {props.renderTopTwine ? ChimeTwine({ position: 'top' }) : ''}
      {props.renderBottomTwine ? ChimeTwine({ position: 'bottom' }) : ''}
    </Self>
  );
}

Chime.defaultProps = {
  renderTopTwine: false,
  renderBottomTwine: false,
};

Chime.propTypes = {
  chimeStyle: PropTypes.string.isRequired,
  renderBottomTwine: PropTypes.bool.isRequired,
  renderTopTwine: PropTypes.bool.isRequired,
};

export default Chime;
