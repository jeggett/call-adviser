/**
 *
 * Button
 *
 */

import React, {Component, PropTypes } from 'react';

import styles from './styles.css';

class Button extends Component {
  render() {
    const className = this.props.className ? this.props.className : styles.button;

    // Render an anchor tag
    let button = (
      <a
        className={className} href={this.props.href}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </a>
    );

    // If the button have the handleroot prop we want to render a button
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
