/*
 *
 * Headline
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHeadline from './selectors';

import Logo from 'components/Logo';

import styles from './styles.css';

export class Headline extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.headline}>
        <Logo />
        <div className={styles.menu}>
          <div className={styles.email}>something@mail.com</div>
          <a className="settings">Settings</a>
          <a className="logout">Log&nbsp;Out</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectHeadline();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Headline);
