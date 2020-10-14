import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {
  const { userData } = props;

  return (
    <div>
      {userData.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
};

export default UserCardList;