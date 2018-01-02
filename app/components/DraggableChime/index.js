/**
*
* DraggableChime
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
// import styled from 'styled-components';

import Chime from 'components/Chime';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      chimeStyle: props.chimeStyle
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function DraggableChime(props) {
  const { chimeStyle, isDragging, connectDragSource } = props;

  return connectDragSource(
    <div style={{ display: 'inline-block', opacity: isDragging ? 0.5 : 1 }}>
      <Chime style={{ opacity: isDragging ? 0.5 : 1 }} chimeStyle={chimeStyle} />
    </div>
  );
}

DraggableChime.propTypes = {
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,

  // interface for Chime
  chimeStyle: PropTypes.string.isRequired,
  renderBottomTwine: PropTypes.bool,
  renderTopTwine: PropTypes.bool,
};

export default DragSource('Chime', cardSource, collect)(DraggableChime);
