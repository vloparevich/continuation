import React, { Component } from 'react';
import Card from '../Card/Card';
import classes from './AddUser.module.css';

export default class AddUser extends Component {
  render() {
    return (
      <Card className={classes.input}>
        <form onSubmit={(e) => this.props.handleAddUser(e)}>
          <label>Username </label>
          <input
            type='text'
            value={this.props.userName}
            name='userName'
            onChange={(e) => this.props.handleUserDetailsChange(e)}
          />
          <label>Age (Years) </label>
          <input
            type='number'
            value={this.props.age}
            name='age'
            onChange={(e) => this.props.handleUserDetailsChange(e)}
          />
          <button>Add User</button>
        </form>
      </Card>
    );
  }
}
