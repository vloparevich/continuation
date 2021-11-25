import React, { Component } from 'react';

export default class UserRow extends Component {
  render() {
    return (
      <div
        className='userRow'
        onClick={() => this.props.hanleUserRemove(this.props.userName)}
      >
        <p>
          {this.props.userName} ({this.props.age} years old)
        </p>
      </div>
    );
  }
}
