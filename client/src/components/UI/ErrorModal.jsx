import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../UI/Button';
import classes from '../UI/ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModdalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

export default class ErrorModal extends Component {
  onOkay = () => {
    this.props.onOkay && this.props.onOkay();
  };
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={this.onOkay} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <ModdalOverlay
            onClick={this.onOkay}
            title={this.props.title}
            message={this.props.message}
          />,
          document.getElementById('overlay-root')
        )}
      </Fragment>
    );
  }
}
