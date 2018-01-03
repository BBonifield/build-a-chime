/**
*
* PaymentForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PaymentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const cardErrorNodes = [];
    for (var key in this.props.cardErrors) {
      cardErrorNodes.push(<li key={key}>{this.props.cardErrors[key].message}</li>)
    }

    return (
      <div>
        <div id="card-errors">{cardErrorNodes}</div>
        <div>
          <label>Card Number</label>
          <div id="sq-card-number"></div>
        </div>
        <div>
          <label>CVV</label>
          <div id="sq-cvv"></div>
        </div>
        <div>
          <label>Expiration Date</label>
          <div id="sq-expiration-date"></div>
        </div>
        <div>
          <label>Postal Code</label>
          <div id="sq-postal-code"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Place square payment form function in componentDidMount
    // Because it has to be called after the DOM renders the divs
    this.paymentForm = new SqPaymentForm({
      applicationId: APP_CONFIG.SQUARE_APPLICATION_ID,
      inputClass: 'sq-input',
      inputStyles: [
          {
            fontSize: '14px',
            padding: '7px 12px',
            backgroundColor: "transparent"
          }
        ],
      cardNumber: {
        elementId: 'sq-card-number',
        placeholder: '0000 0000 0000 0000'    
      },
      cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
      },
      postalCode: {
        elementId: 'sq-postal-code',
        placeholder: '94110'
      },
      callbacks: {
        cardNonceResponseReceived: function(errors, nonce, cardData) {
        },
          // if (errors){
            // this.setState({is_processing: false, card_errors: errors});
          // }else{
            // this.setState({card_errors: []});
            // this.chargeCardWithNonce(nonce);
          // }
        // }.bind(this), //needed to bring this into context
        // unsupportedBrowserDetected: function() {
          // // Alert the buyer
        // }.bind(this)
      }
    });

    this.paymentForm.build();
  }
}

PaymentForm.propTypes = {

};

export default PaymentForm;
