/**
*
* ChimesCountSelector
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChimeCountOption from 'components/ChimeCountOption';
import { AVAILABLE_COUNTS } from './constants';

function ChimesCountSelector(props) {
  const Wrapper = styled.div`
    text-align: center;
    margin: 1em 0;
  `;

  return (
    <Wrapper>{renderOptions(props.chimeCount)}</Wrapper>
  );
}

function renderOptions(chimeCount) {
  return AVAILABLE_COUNTS.map((count) => {
    const attributes = {
      count,
      key: `chime-count-${count}`,
      selected: count === chimeCount,
    };

    return (
      <ChimeCountOption {...attributes} />
    );
  });
}

ChimesCountSelector.propTypes = {
  chimeCount: PropTypes.number.isRequired,
};

export default ChimesCountSelector;
