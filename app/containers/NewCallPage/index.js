/*
 *
 * NewCallPage
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

import selectNewCallPage from './selectors';

import TextField from 'components/TextField';
import Button from 'components/Button';

import styles from './styles.css';

export class NewCallPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    window.addEventListener("keydown", this.listenForEsc, true);
  }

  componentWillUnmountn() {
    window.removeEventListener("keydown", this.listenForEsc, true);
  }

  listenForEsc = (evt) => {
    if (evt.key === "Escape" || evt.keyCode === 27) {
      this.openMainPage();
    }
  };

  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Change route to '/main'
   */
  openMainPage = () => {
    this.openRoute('/main');
  };

  render() {
    return (
      <div>
        className={styles.newCallPage}>
        <div className={styles.card}>
          <form>
            <TextField type="tel">Number</TextField>
            <TextField type="text">Client Name</TextField>
            <span>Choose dialog tree: </span>
            <select id="tree">
              <option value="colors">colors</option>
              <option value="cars">cars</option>
              <option value="food">food</option>
            </select>
            <Button>Call</Button>
          </form>
        </div>
        <div
          className={styles.overlay}
          onClick={this.openMainPage}
        >
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectNewCallPage();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCallPage);
