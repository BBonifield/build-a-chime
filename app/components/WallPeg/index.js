/**
*
* WallPeg
*
*/

import React from 'react';
import styled from 'styled-components';

const Self = styled.div`
  text-align: center;
  img {
    height: 100px;
  }
`;

function WallPeg() {
  return (
    <Self>
      <img src="wall-peg.svg" />
    </Self>
  );
}

WallPeg.propTypes = {};

export default WallPeg;
