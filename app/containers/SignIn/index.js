/*
 *
 * SignIn
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Field, reduxForm } from 'redux-form/immutable';

import selectSignIn from './selectors';

import TextField from 'components/TextField';
import Button from 'components/Button';
import Logo from 'components/Logo';

import styles from './styles.css';

export class SignIn extends Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  openLogPage = () => {
    this.openRoute('/main/log');
  };

  handleFormSubmit(map) {
    console.log(map.get('email'), map.get('password'));
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className={styles.signUp}>
        <div className={styles.card}>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Logo />
            <Field name="email" type="text" component={TextField} label="Email" />
            <Field name="password" type="password" component={TextField} label="Password" />
            <Button disabled={submitting}>Sign In</Button>
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapStateToProps = selectSignIn();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'signin',
  })(SignIn)
);
