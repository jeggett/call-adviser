/**
*
* TextField
*
*/

import React, { Component, PropTypes} from 'react';

import styles from './styles.css';

class TextField extends Component{
  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.group}>
          <input type={this.props.type} required="true" />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label>{this.props.children}</label>
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default TextField;
