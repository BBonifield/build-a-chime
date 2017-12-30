/**
*
* ChimesCountSelector
*
*/

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

import ChimeCountOption from 'components/ChimeCountOption';

import { AVAILABLE_COUNTS } from './constants';

class ChimesCountSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>{this.options()}</div>
    );
  }

  options() {
    return AVAILABLE_COUNTS.map((count) => {
      const attributes = {
        count,
        selected: count === this.props.chimeCount
      };

      return (
        <ChimeCountOption {...attributes} />
      );
    });
  }
}

ChimesCountSelector.propTypes = {
  chimeCount: PropTypes.number,
};

export default ChimesCountSelector;
