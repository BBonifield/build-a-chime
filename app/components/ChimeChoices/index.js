/**
*
* ChimeChoices
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import { AVAILABLE_CHIME_STYLES } from './constants';

import DraggableChime from 'components/DraggableChime';

class ChimeChoices extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container fluid style={{ overflow: 'hidden', clear: 'both', textAlign: 'center' }}>
        {this.styles()}
      </Container>
    );
  }

  styles() {
    return AVAILABLE_CHIME_STYLES.map((style, idx) => {
      const key = `choice-row-${idx}`;
      return (
        <Row key={key}>
          <Col>
            <DraggableChime chimeStyle={style} />
          </Col>
        </Row>
      );
    });
  }
}

ChimeChoices.propTypes = {
};

export default ChimeChoices;
