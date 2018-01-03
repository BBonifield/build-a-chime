import { injectGlobal } from 'styled-components';

import background from 'images/scribble_light.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: url(${background});
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Courgette', cursive;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
