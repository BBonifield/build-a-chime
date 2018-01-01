/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import PropTypes from 'prop-types';
import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend'
import { Container, Row, Col } from 'react-grid-system';
import { DragDropContextProvider } from 'react-dnd'
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectChimeCount, makeSelectChimes } from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';

import messages from './messages';
import reducer from './reducer';

import ChimesCountSelector from 'components/ChimesCountSelector';
import ChimeChoices from 'components/ChimeChoices';
import ChimesPreview from 'components/ChimesPreview';

import '!file-loader?name=[name].[ext]!images/chime-brown.svg';
import '!file-loader?name=[name].[ext]!images/chime-tan.svg';
import '!file-loader?name=[name].[ext]!images/chime-cream.svg';
import '!file-loader?name=[name].[ext]!images/chime-blank.svg';

import '!file-loader?name=[name].[ext]!images/chime-twine-top.svg';
import '!file-loader?name=[name].[ext]!images/chime-twine-bottom.svg';

import '!file-loader?name=[name].[ext]!images/wall-peg.svg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Container fluid>
          <Row>
            <Col>
              <h1>
                <FormattedMessage {...messages.header} />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ChimesCountSelector chimeCount={this.props.chimeCount} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3} offset={{ md: 3 }}>
              <ChimesPreview chimes={this.props.chimes} />
            </Col>
            <Col xs={6} md={3}>
              <ChimeChoices />
            </Col>
          </Row>
        </Container>
      </DragDropContextProvider>
    );
  }
}

HomePage.propTypes = {
  chimeCount: PropTypes.number.isRequired,
  chimes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  chimeCount: makeSelectChimeCount(),
  chimes: makeSelectChimes(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer });

// reducer must come before connect in order to properly set default global state
export default compose(
  withReducer,
  withConnect,
)(HomePage);
