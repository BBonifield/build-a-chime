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
`;

function Footer() {
  return (
    <Self>
      product of
      <br/>
      <a href="http://fettleandfire.com" target="_blank">
        <img className="logo" src={logo} />
      </a>
    </Self>
  );
}

Footer.propTypes = {
};

export default Footer;
