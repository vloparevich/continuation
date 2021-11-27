import React, { Component, useState } from 'react';
import Card from '../Card/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => props.hanleUserRemove(user)}>
            {user.userName} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
