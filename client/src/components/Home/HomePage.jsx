import '../../App.css';
import React, { PureComponent } from 'react';
import AddUser from '../AddUser/AddUser';
import UsersList from '../UsersList/UsersList';

export default class HomePage extends PureComponent {
  state = {
    users: [],
    errorMessage: false,
    errorMessageText: '',
  };

  updateListOfusers = (userName, age) => {
    if (!userName || age < 1) {
      this.setState({
        errorMessage: !this.state.errorMessage,
      });
    } else {
      this.setState({
        users: [
          ...this.state.users,
          {
            userName: userName,
            age: age,
            id: Math.random().toString(),
          },
        ],
      });
    }
  };

  removeUserFromList = (userName) => {
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
        <AddUser onUpdateUsers={this.updateListOfusers} />
        <UsersList
          users={this.state.users}
          hanleUserRemove={this.removeUserFromList}
        />
      </div>
    );
  }
}
