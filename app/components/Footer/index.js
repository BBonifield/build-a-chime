/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

const logo = require('images/fettle-fire-logo.svg');

const Self = styled.div`
  background: #4B4B4B;
  border-top: 2px solid #000;
  padding: 2em;
  margin-top: 1em;
  color: #fff;

  text-align: center;

  img.logo {
    padding-top: 0.2em;
    width: 100px;
  }

  h5 {
    margin: 0;
  }
`;

function Footer() {
  return (
    <Self>
      <h5>a product of</h5>
      <a href="http://fettleandfire.com" target="_blank">
        <img className="logo" src={logo} />
      </a>
    </Self>
  );
}

Footer.propTypes = {
};

export default Footer;
