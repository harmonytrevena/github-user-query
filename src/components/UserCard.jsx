import React from 'react';

import 'bulma/css/bulma.css';


const UserCard = props => {
  const { user } = props;
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
};

export default UserCard;