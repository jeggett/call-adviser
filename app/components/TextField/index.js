/**
*
* TextField
*
*/

import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class TextField extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.group}>
        {/* required="true" is necessary for this to work, so do not delete */}
        {/* see https://scotch.io/tutorials/google-material-design-input-boxes-in-css3 */}
        <input {...this.props} required="true" />
        <span className={styles.bar} />
        <label>{this.props.label}</label>
        {this.props.touched && this.props.error && <div className={styles.error}>{this.props.error}</div>}
      </div>
    );
  }
}

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default TextField;
