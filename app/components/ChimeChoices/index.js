/**
*
* ChimeChoices
*
*/

import React from 'react';
// import styled from 'styled-components';

import { AVAILABLE_CHIME_STYLES } from './constants';

class ChimeChoices extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.styles()}
      </div>
    );
  }

  styles() {
    return AVAILABLE_CHIME_STYLES.map((style) => {
      const src = `images/chime-${style}-none.png`;
      return (
        <img src={src} />
      );
    });
  }
}

ChimeChoices.propTypes = {
};

export default ChimeChoices;
