import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import styles from './styles.css';

class NavItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Link
        to={this.props.route}
        className={styles.link}
        activeClassName={styles.active}
        activeStyle={{ color: "lightgreen" }}
      >
        {this.props.children}
      </Link>
    );
  }
}

NavItem.propTypes = {
  className: PropTypes.string,
  route: PropTypes.string,
  children: PropTypes.string,
  handleRoute: PropTypes.func,
};

export default NavItem;
