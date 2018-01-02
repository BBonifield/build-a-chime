/**
*
* PurchaseButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Button = styled.button`
  display: block;
  background: #90D1D1;
  border-radius: 30px;
  border: 4px solid #90D1D1;
  color: #D5FFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 1.8em;
  font-weight: 700;
  margin-top: 0.5em;
  padding: 25px 0;
  width: 90%;
  text-align: center;
  text-transform: uppercase;

  transition: all 0.5s ease;

  &:hover {
    color: #000;
    background: #D5FFFF;
  }

  &:disabled {
    pointer-events: all;
    border-color: #A1A1A1;
    background: #A1A1A1;
    color: #C8C8C8;
    cursor: auto;
  }
`;

function PurchaseButton(props) {
  const title = props.enabled ? '' : 'Select all chimes to continue';

  return (
    <Button disabled={!props.enabled} title={title}>
      <FormattedMessage {...messages.buyNow} />
    </Button>
  );
}

PurchaseButton.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

export default PurchaseButton;
