/**
 *
 * ChimesCountSelector
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ChimeCountOption from 'components/ChimeCountOption';
import injectReducer from 'utils/injectReducer';
import reducer from 'containers/HomePage/reducer';
import { setChimeCount } from 'containers/HomePage/actions';
import { AVAILABLE_COUNTS } from './constants';
import { makeSelectChimeCount } from 'containers/App/selectors';

export class ChimesCountSelector extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>{this.options()}</div>
    );
  }

  options() {
    return AVAILABLE_COUNTS.map((count) => {
      const attributes = {
        count,
        key: `chime-count-${count}`,
        selected: count === this.props.chimeCount,
        onClick: this.props.onClickOption,
      };

      return (
        <ChimeCountOption {...attributes} />
      );
    });
  }
}

ChimesCountSelector.propTypes = {
  onClickOption: PropTypes.func.isRequired,
  chimeCount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  chimeCount: makeSelectChimeCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickOption: function (evt) {
      console.log(setChimeCount(this.props.count));
      return dispatch(setChimeCount(this.props.count));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'default', reducer });

export default compose(
  withReducer,
  withConnect,
)(ChimesCountSelector);
