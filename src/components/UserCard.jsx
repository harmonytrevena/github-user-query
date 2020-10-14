import React from 'react';
import { Link } from 'react-router-dom';

import 'bulma/css/bulma.css';


const UserCard = props => {
  const { user } = props;
  return (
    <div>
      <Link to={`/user/${user.login}`}>
        <img src={user.avatar_url} alt={user.name} />
        <h3>{user.name}</h3>
      </Link>
      <p>{user.bio}</p>
      <p>{user.company}</p>
      <p>{user.location}</p>
    </div>
  );
};

export default UserCard;