/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ChimesCountSelector from 'components/ChimesCountSelector';

const Self = styled.div`
  background: white;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
  text-align: center;

  h1 {
    font-size: 3em;
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

function Header(props) {
  return (
    <Self>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      <h3>
        <FormattedMessage {...messages.chimeCount} />
      </h3>

      <ChimesCountSelector chimeCount={props.chimeCount} />
    </Self>
  );
}

Header.propTypes = {
  chimeCount: PropTypes.number.isRequired,
};

export default Header;
