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

  img.moveable {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
`;

function Chime(props) {
  const moveable = props.chimeStyle !== 'blank';

  const className = moveable ? 'moveable' : '';
  const src = `chime-${props.chimeStyle}.svg`;

  return (
    <Self>
      {props.renderTopTwine ? ChimeTwine({ position: 'top' }) : ''}
      {props.renderBottomTwine ? ChimeTwine({ position: 'bottom' }) : ''}
      <img src={src} className={className} />
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
