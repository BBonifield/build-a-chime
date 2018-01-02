/**
*
* DroppableChime
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd'
// import styled from 'styled-components';

import DraggableChime from 'components/DraggableChime';

const chimeTarget = {
  drop(props, monitor) {
    const { chimeStyle, chimePosition } = monitor.getItem();

    props.onDrop({
      oldStyle: props.chimeStyle,
      newStyle: chimeStyle,
      swapPosition: chimePosition,
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function DroppableChime(props) {
  const { connectDropTarget, isOver } = props;

  return connectDropTarget(
    <div style={{ display: 'inline-block' }}>
      <DraggableChime {...props} />
    </div>
  );
}

DroppableChime.propTypes = {
  onDrop: PropTypes.func.isRequired,
  chimeStyle: PropTypes.string.isRequired,
  chimePosition: PropTypes.number.isRequired,

  // interface for Chime
  renderBottomTwine: PropTypes.bool,
  renderTopTwine: PropTypes.bool,
};

export default DropTarget('Chime', chimeTarget, collect)(DroppableChime);
