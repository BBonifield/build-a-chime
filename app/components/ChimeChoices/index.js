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

const StyledContainer = styled(Container)`
  overflow: hidden;
  clear: both;

  h3 {
    margin: 0;
  }
`;

class ChimeChoices extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledContainer fluid>
        <Row>
          <Col>
            <h3>Chime Choices:</h3>
          </Col>
        </Row>

        {this.styles()}

        <Row style={{ marginTop: '1em' }}>
          <Col>
            <p>More options coming soon...</p>
          </Col>
        </Row>
      </StyledContainer>
    );
  }

  styles() {
    return AVAILABLE_CHIME_STYLES.map((style, idx) => {
      const key = `choice-row-${idx}`;
      return (
        <div key={key} style={{ padding: '0.2em' }}>
          <Row>
            <Col style={{ textTransform: 'capitalize' }}>
              {style}
            </Col>
          </Row>
          <Row>
            <Col>
              <DraggableChime chimeStyle={style} />
            </Col>
          </Row>
        </div>
      );
    });
  }
}

ChimeChoices.propTypes = {
};

export default ChimeChoices;
