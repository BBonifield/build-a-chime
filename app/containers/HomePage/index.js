/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectChimeCount, makeSelectChimes } from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';

import messages from './messages';
import reducer from './reducer';

import ChimesPreview from 'components/ChimesPreview';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ChimesPreview chimes={this.props.chimes} />
      </div>
    );
  }
}

HomePage.propTypes = {
  chimeCount: PropTypes.number,
  chimes: PropTypes.arrayOf(PropTypes.string),
  // onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: (evt) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  chimeCount: makeSelectChimeCount(),
  chimes: makeSelectChimes(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer });

// reducer must come before connect in order to properly set default global state
export default compose(
  withReducer,
  withConnect,
)(HomePage);
