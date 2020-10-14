import React from 'react';
import UserCard from './UserCard';

import 'bulma/css/bulma.css';
import { Box, Column, Columns } from 'bloomer';

const UserCardList = props => {
  const { userData } = props;

  return (
    <>
      <Columns isCentered>
        <Column isSize='1/2'>
          {
            userData.map((user, index) => (
            <Box>
              <UserCard user={user} key={index} />
            </Box>
            ))
          }
        </Column>
      </Columns>
    </>
  );
};

export default UserCardList;