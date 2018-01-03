/**
*
* TestModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

import PaymentForm from 'components/PaymentForm';

import squareBrand from 'images/square-brand.png';

class TestModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility.bind(this)}>Open</button>

        <Modal show={this.state.isOpen}>
          <Modal.Header>
            <h2>You're Almost Done!</h2>
          </Modal.Header>
          <Modal.Body>
            <h5>Order Details</h5>
            <ul>
              <li>Custom Chimes (set of {this.props.chimeCount})</li>
            </ul>
            <p>
              <strong>Total:</strong> 17.95
            </p>

            <p>
              Enter in your payment information in the secure form below.
              All orders are processed via <a href="https://squareup.com" target="_blank">Square</a> for your safety.
            </p>

            <PaymentForm />

            <p style={{ textAlign: 'center', marginTop: '0.5em' }}>
              <a href="https://squareup.com" target="_blank">
                <img src={squareBrand} />
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsSize="large" onClick={this.toggleVisibility.bind(this)}>Cancel</Button>
            <Button bsStyle="primary" bsSize="large">Process Payment</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  toggleVisibility() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}

TestModal.propTypes = {
  chimeCount: PropTypes.number.isRequired,
};

export default TestModal;
