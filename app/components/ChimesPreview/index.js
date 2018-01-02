/**
*
* ChimesPreview
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
// import styled from 'styled-components';

import { setChimeStyle } from 'containers/HomePage/actions';
import DroppableChime from 'components/DroppableChime';
import Chime from 'components/Chime';
import WallPeg from 'components/WallPeg';

class ChimesPreview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container fluid style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            <WallPeg />
          </Col>
        </Row>
        {this.renderChimes()}
      </Container>
    );
  }

  renderChimes() {
    const lastChimePosition = this.props.chimes.length - 1;

    return this.props.chimes.map((chimeStyle, chimePosition) => {
      const key = `chime-row-${chimePosition}`;
      const renderBottomTwine = chimePosition !== lastChimePosition;

      const attributes = {
        chimeStyle,
        chimePosition,
        renderBottomTwine,
        renderTopTwine: true,
        onDrop: ({ oldStyle, newStyle, swapPosition }) => {
          this.props.dispatch(setChimeStyle(newStyle, chimePosition));

          // if chimes are being re-arranged
          if (swapPosition) {
            this.props.dispatch(setChimeStyle(oldStyle, swapPosition));
          }
        }
      };

      return (
        <Row key={key}>
          <Col>
            <DroppableChime {...attributes} />
          </Col>
        </Row>
      );
    })
  }
}

ChimesPreview.propTypes = {
  chimes: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(ChimesPreview);
