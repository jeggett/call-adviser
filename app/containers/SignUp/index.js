/*
 *
 * SignUp
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import selectSignUp from './selectors'; // ???

import TextField from 'components/TextField';
import Button from 'components/Button';

import styles from './styles.css';

export class SignUp extends React.Component { // eslint-disable-line react/prefer-stateless-function


  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/'
   */
  openFeaturesPage = () => {
    this.openRoute('/features');
  };


  render() {
    return (
      <div className={ styles.signUp }>
        <div className={styles.card}>
          <form action="">
            <TextField type="email">Email</TextField>
            <TextField type="password">Password</TextField>
            <Button>Sign In</Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectSignUp();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
