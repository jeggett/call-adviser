/*
 *
 * MainPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectMainPage from './selectors';

import Headline from 'containers/Headline';
import NavPanel from 'containers/NavPanel';

import styles from './styles.css';

export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.mainPage }>
        <Headline />
        <main>
          <NavPanel />
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
};

const mapStateToProps = selectMainPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
