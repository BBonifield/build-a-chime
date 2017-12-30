/**
*
* ChimesPreview
*
*/

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

import Chime from 'components/Chime';
import WallPeg from 'components/WallPeg';

class ChimesPreview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const lastChimeIdx = this.props.chimes.length - 1;

    return (
      <div>
        <WallPeg />
        {this.props.chimes.map((chimeStyle, idx) => {
          const renderBottomTwine = idx !== lastChimeIdx;
          const attributes = { key: `chime${idx}`, chimeStyle, renderBottomTwine };

          return (<Chime {...attributes} />);
        })}
      </div>
    );
  }
}

ChimesPreview.propTypes = {
  chimes: PropTypes.arrayOf(PropTypes.string),
};

export default ChimesPreview;
