/**
*
* ChimeCountOption
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';

import { setChimeCount } from 'containers/HomePage/actions';

import './index.css'

class ChimeCountOption extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let className;
    if (this.props.selected) className = 'selected';

    return (
      <div className={className} onClick={this.makeOnClick()}>
        {this.props.count}
      </div>
    );
  }

  makeOnClick() {
    return () => this.props.dispatch(setChimeCount(this.props.count));
  }
}

ChimeCountOption.propTypes = {
  dispatch: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(ChimeCountOption);
