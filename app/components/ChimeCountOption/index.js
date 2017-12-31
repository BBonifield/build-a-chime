/**
*
* ChimeCountOption
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setChimeCount } from 'containers/HomePage/actions';

import './index.css'

const Self = styled.div`
  display: inline-block;
  width: 3em;
  padding: .5em 0;
  border: 1px solid #ddd;
  margin: 0 .5em;
  cursor: pointer;
`;

class ChimeCountOption extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let className;
    if (this.props.selected) className = 'selected';

    return (
      <Self className={className} onClick={this.makeOnClick()}>
        {this.props.count}
      </Self>
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
