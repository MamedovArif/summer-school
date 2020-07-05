import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.hjkk.bh = 'hkgf';
    }

    return (
      <button onClick={() => this.setState({renderError: true})}
        className="credit-button" to="/contacts">
        Отправить заявку
      </button>
    );
  }
}
