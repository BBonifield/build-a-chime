/**
*
* ChimeCountOption
*
*/

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

import './index.css'

class ChimeCountOption extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let className;
    if (this.props.selected) className = 'selected';

    return (
      <div className={className} onClick={this.props.onClick.bind(this)}>
        {this.props.count}
      </div>
    );
  }
}

ChimeCountOption.propTypes = {
  count: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChimeCountOption;
