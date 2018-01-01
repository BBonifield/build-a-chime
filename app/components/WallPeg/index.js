/**
*
* WallPeg
*
*/

import React from 'react';
import styled from 'styled-components';

const Self = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;

  img {
    width: 100px;
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
