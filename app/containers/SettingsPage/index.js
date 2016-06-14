/*
 *
 * SettingsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSettingsPage from './selectors';
import styles from './styles.css';

export class SettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.settingsPage }>
      This is SettingsPage container !
      </div>
    );
  }
}

const mapStateToProps = selectSettingsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
