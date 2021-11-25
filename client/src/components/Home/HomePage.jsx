import '../../App.css';
import UserRow from '../User/UserRow';
import React, { PureComponent, useState } from 'react';
import Modal from '../Modal/Modal';
import AddUser from '../AddUser/AddUser';

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
        <AddUser
          handleAddUser={(e) => this.handleAddUser(e)}
          handleUserDetailsChange={(e) => this.handleUserDetailsChange(e)}
          userName={this.state.userName}
          age={this.state.age}
        />
        <Modal onOkay={this.handleModal} showModal={this.state.errorMessage}>
          Please enter a valid name and age (non-empty values).
        </Modal>
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
      </div>
    );
  }
}
