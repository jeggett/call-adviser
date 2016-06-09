/*
 *
 * NavPanel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import selectNavPanel from './selectors';

import Button from 'components/Button';

import styles from './styles.css';

export class NavPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Change route ot '/main/new'
   */
  openCreateNewCall = () => {
    this.openRoute('/new');
  };

  render() {
    return (
      <div className={styles.navPanel}>
        <Button handleRoute={this.openCreateNewCall}>New&nbsp;Call</Button>
        <ul>
          <li>Call Log</li>
          <li>Dialog Trees</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = selectNavPanel();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);
