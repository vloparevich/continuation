import logo from '../logo.svg';
import '../App.css';
import UserRow from './UserRow';
import React, { PureComponent, useState } from 'react';
import Modal from './Modal';

export default class HomePage extends PureComponent {
  state = {
    users: [],
    userName: '',
    age: 0,
    errorMessage: false,
  };

  handleUserDetailsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddUser = (event) => {
    event.preventDefault();
    if (!this.state.userName || this.state.age < 1) {
      this.setState({
        errorMessage: !this.state.errorMessage,
      });
    } else {
      this.setState({
        users: [
          ...this.state.users,
          {
            userName: this.state.userName,
            age: this.state.age,
          },
        ],
      });
      this.setState({
        userName: '',
        age: 0,
      });
    }
  };

  removeUseFromList = (userName) => {
    console.log('Called removeUserFromList');
    const indexOfUserInArray = this.state.users.findIndex(
      (user) => user.userName === userName
    );
    const copyOfUsers = [...this.state.users];
    copyOfUsers.splice(indexOfUserInArray, 1);
    this.setState({
      users: [...copyOfUsers],
    });
  };

  handleModal = () => {
    this.setState({
      errorMessage: !this.state.errorMessage,
    });
  };

  render() {
    return (
      <div className='App'>
        <div id='formBox'>
          <form onSubmit={(e) => this.handleAddUser(e)}>
            <label>Username </label>
            <input
              type='text'
              value={this.state.userName}
              name='userName'
              onChange={(e) => this.handleUserDetailsChange(e)}
            />
            <label>Age (Years) </label>
            <input
              type='number'
              value={this.state.age}
              name='age'
              onChange={(e) => this.handleUserDetailsChange(e)}
            />
            <button>Add User</button>
          </form>
        </div>
        <>
          <>
            <Modal
              onOkay={this.handleModal}
              showModal={this.state.errorMessage}
            >
              Please enter a valid name and age (non-empty values).
            </Modal>
          </>
          <div id='listOfUSers'>
            {this.state.users.map((user, index) => {
              return (
                <UserRow
                  key={index}
                  userName={user.userName}
                  age={user.age}
                  hanleUserRemove={() => this.removeUseFromList(user.userName)}
                />
              );
            })}
          </div>
        </>
      </div>
    );
  }
}
