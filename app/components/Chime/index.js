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

  img.chime {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
`;

function Chime(props) {
  const { chimeStyle, renderTopTwine, renderBottomTwine } = props;

  const src = `chime-${chimeStyle}.svg`;

  return (
    <Self>
      <img className="chime" src={src} />
      {renderTopTwine ? ChimeTwine({ position: 'top' }) : ''}
      {renderBottomTwine ? ChimeTwine({ position: 'bottom' }) : ''}
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
