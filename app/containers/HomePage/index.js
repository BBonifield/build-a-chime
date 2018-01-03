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
import { every } from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectChimeCount, makeSelectChimes } from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';

import messages from './messages';
import reducer from './reducer';

import ChimeChoices from 'components/ChimeChoices';
import ChimesPreview from 'components/ChimesPreview';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PurchaseButton from 'components/PurchaseButton';
import Sidebar from './Sidebar';
import PurchaseModal from 'components/PurchaseModal';

import { CHIME_STYLE_BLANK } from 'containers/App/constants';

import '!file-loader?name=[name].[ext]!images/chime-brown.svg';
import '!file-loader?name=[name].[ext]!images/chime-tan.svg';
import '!file-loader?name=[name].[ext]!images/chime-cream.svg';
import '!file-loader?name=[name].[ext]!images/chime-blank.svg';

import '!file-loader?name=[name].[ext]!images/chime-twine-top.svg';
import '!file-loader?name=[name].[ext]!images/chime-twine-bottom.svg';

import '!file-loader?name=[name].[ext]!images/wall-peg.svg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      paymentModalOpen: false
    };
  }

  render() {
    return (
      <div>
        <Header chimeCount={this.props.chimeCount}/>

        <DragDropContextProvider backend={HTML5Backend}>
          <Container fluid>
            <Row>
              <Col xs={6} md={3} offset={{ md: 3 }}>
                <ChimesPreview chimes={this.props.chimes} />
              </Col>
              <Col xs={6} md={3}>
                <Sidebar>
                  <ChimeChoices />
                  <PurchaseButton enabled={this.purchaseEnabled()} onClick={this.togglePaymentModal.bind(this)} />
                </Sidebar>
              </Col>
            </Row>
          </Container>
        </DragDropContextProvider>

        <PurchaseModal
          chimeCount={this.props.chimeCount}
          isOpen={this.state.paymentModalOpen}
          onCancel={this.togglePaymentModal.bind(this)}
        />

        <Footer />
      </div>
    );
  }

  purchaseEnabled() {
    return every(this.props.chimes, (chimeStyle) => chimeStyle !== CHIME_STYLE_BLANK);
  }

  togglePaymentModal() {
    this.setState({ paymentModalOpen: !this.state.paymentModalOpen });
  }
}

HomePage.propTypes = {
  chimeCount: PropTypes.number.isRequired,
  chimes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = createStructuredSelector({
  chimeCount: makeSelectChimeCount(),
  chimes: makeSelectChimes(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'global', reducer });

// reducer must come before connect in order to properly set default global state
export default compose(
  withReducer,
  withConnect,
)(HomePage);
