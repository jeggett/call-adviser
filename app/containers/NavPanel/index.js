/*
 *
 * NavPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import selectNavPanel from './selectors';

import Button from 'components/Button';
import NavItem from 'components/NavItem';
import { Link } from 'react-router';

import styles from './styles.css';

export class NavPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Change route to '/main/new'
   */
  openCreateNewCall = () => {
    this.openRoute('/main/new');
  };

  openLogPage = () => {
    this.openRoute('/main/log');
  };

  openDialogTreePage = () => {
    this.openRoute('/main/trees');
  };

  render() {
    return (
      <div className={styles.navPanel}>
        <div className={styles.buttons}>
          <Button handleRoute={this.openCreateNewCall}>
            New&nbsp;Call
          </Button>
        </div>
        <div>
          <NavItem
            route="/main/log"
            handleRoute={this.openLogPage}
          >
            Call Log
          </NavItem>
          <NavItem route="/main/trees" handleRoute={this.openDialogTreePage}>Dialog Trees</NavItem>
        </div>
      </div>
    );
  }
}

NavPanel.propTypes = {
  changeRoute: PropTypes.func,
};

const mapStateToProps = selectNavPanel();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);
