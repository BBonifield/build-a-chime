/**
*
* DroppableChime
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd'
// import styled from 'styled-components';

import Chime from 'components/Chime';

const chimeTarget = {
  drop(props, monitor) {
    const chimeStyle = monitor.getItem().chimeStyle;
    props.onDrop(chimeStyle);
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
      <Chime {...props} />
    </div>
  );
}

DroppableChime.propTypes = {
  onDrop: PropTypes.func.isRequired,
  chimeStyle: PropTypes.string.isRequired,
};

export default DropTarget('Chime', chimeTarget, collect)(DroppableChime);
