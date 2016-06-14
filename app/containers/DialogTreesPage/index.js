/*
 *
 * DialogTreesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDialogTreesPage from './selectors';
import styles from './styles.css';

export class DialogTreesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.dialogTreesPage }>
      This is DialogTreesPage container !
      </div>
    );
  }
}

const mapStateToProps = selectDialogTreesPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogTreesPage);
