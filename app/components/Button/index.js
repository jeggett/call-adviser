/**
 *
 * Button
 *
 */

import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class Button extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const className = this.props.className ? this.props.className : styles.button;

    // Render a button
    let button = (
      <button
        className={className} href={this.props.href}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );

    // If the button have the handleRoute prop
    if (this.props.handleRoute) {
      button = (
        <button
          className={className}
          onClick={this.props.handleRoute}
        >
          {this.props.children}
        </button>
      );
    }

    return (
      <div className={styles.buttonWrapper}>
        {button}
      </div>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
