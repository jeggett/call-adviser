/*
 *
 * MainPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectMainPage from './selectors';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import Headline from 'containers/Headline';
import Button from 'components/Button';

import styles from './styles.css';

export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Change route to '/main/new'
   */
  openCreateNewCall = () => {
    this.openRoute('/main/new');
  };

  render() {
    return (
      <div className={ styles.mainPage }>
        <Headline />
        <main>
          <nav className={styles.navPanel}>
            <div className={styles.buttons}>
              <Button handleRoute={this.openCreateNewCall}>
                New&nbsp;Call
              </Button>
            </div>
            <Link className={styles.link} to="/main/log" activeClassName={styles.active}>Log</Link>
            <Link className={styles.link} to="/main/trees" activeClassName={styles.active}>Call Scripts</Link>
          </nav>
          <section className={styles.subpage}>
            <header className={styles.subpage_header}>
              Subpage name
            </header>
            <main className={styles.subpage_main}>
              {this.props.children}
            </main>
            <footer className={styles.subpage_footer}>
              Copyright, etc.
            </footer>
          </section>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  children: PropTypes.node,
  changeRoute: PropTypes.func,
};

const mapStateToProps = selectMainPage();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
