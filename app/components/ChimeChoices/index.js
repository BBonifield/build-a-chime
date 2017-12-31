/**
*
* ChimeChoices
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

import { AVAILABLE_CHIME_STYLES } from './constants';
import Chime from 'components/Chime';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
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

class ChimeChoices extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isDragging, connectDragSource, text } = this.props;

    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {this.styles()}
      </div>
    );
  }

  styles() {
    return AVAILABLE_CHIME_STYLES.map((style) => {
      return (
        <Chime chimeStyle={style} />
      );
    });
  }
}

ChimeChoices.propTypes = {
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

// export default ChimeChoices;


// Export the wrapped component:
export default DragSource('something', cardSource, collect)(ChimeChoices);
