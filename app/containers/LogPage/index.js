/*
 *
 * LogPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogPage from './selectors';
import styles from './styles.css';

export class LogPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.logPage }>
      This is LogPage container !
      </div>
    );
  }
}

const mapStateToProps = selectLogPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogPage);
