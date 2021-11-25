import React, { Component } from 'react';

export default class AddUser extends Component {
  render() {
    return (
      <div id='formBox'>
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
      </div>
    );
  }
}
