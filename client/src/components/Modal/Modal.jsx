import React, { Component } from 'react';

export default class Modal extends Component {
  onOkay = () => {
    this.props.onOkay && this.props.onOkay();
  };
  render() {
    console.log('Showing modal window?', this.props.showModal);
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.onOkay}>Okay</button>
      </div>
    );
  }
}
