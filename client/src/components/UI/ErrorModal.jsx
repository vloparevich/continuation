import React, { Component } from 'react';
import Card from '../Card/Card';
import Button from '../UI/Button';
import classes from '../UI/ErrorModal.module.css';

export default class Modal extends Component {
  onOkay = () => {
    this.props.onOkay && this.props.onOkay();
  };
  render() {
    return (
      <div className={classes.backdrop} onClick={this.onOkay}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{this.props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{this.props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={this.onOkay}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
  }
}
