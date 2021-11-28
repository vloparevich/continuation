import React, { Component } from 'react';
import Card from '../Card/Card';
import classes from './AddUser.module.css';
import Button from '../../components/UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

export default class AddUser extends Component {
  state = { userName: '', age: 0 };

  handleUserDetailsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddUser = (event) => {
    event.preventDefault();
    if (
      !this.state.userName?.trim() ||
      this.state.age.toString().trim().length === 0
    ) {
      this.setState({
        error: {
          title: 'Invalid input',
          message: 'Neither user name or age can be empty',
        },
      });
    } else if (+this.state.age < 1) {
      this.setState({
        error: {
          title: 'Invalid age',
          message: 'Age cannot be less than 1 year old',
        },
      });
    } else {
      this.props.onUpdateUsers(this.state.userName, this.state.age);
    }
    this.setState({
      userName: '',
      age: 0,
    });
  };

  onOkay = () => {
    this.setState({ error: null });
  };

  render() {
    return (
      <Wrapper>
        {this.state.error && (
          <ErrorModal
            title={this.state.error.title}
            message={this.state.error.message}
            onOkay={this.onOkay}
          />
        )}

        <Card className={classes.input}>
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
            <Button type='submit'>Add User</Button>
          </form>
        </Card>
      </Wrapper>
    );
  }
}
