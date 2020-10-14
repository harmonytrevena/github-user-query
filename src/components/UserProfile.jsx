import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Column, Columns } from 'bloomer';


const UserProfile = props => {
    const [repoData, setRepos] = useState([]);
    const { userData } = props;
    const { username } = useParams();
    const user = userData.find((user) => {
        return user.login === username ? user : null;
    })

    useEffect(() => {
        (async function () {
            const response = await fetch(
            `https://api.github.com/users/${username}/repos`
            );
            const repoData = await response.json();
            console.log(repoData)
            setRepos(repoData);
            })();
    });


    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <h1>Github Repositories:</h1>
            <Columns isCentered>
                <Column isSize='1/2'>
                    {
                        repoData.map((repo) => {
                            return (
                                <Box key={repo.node_id}>
                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                    <p>{repo.description}</p>
                                </Box>
                            )
                        })
                    }
                </Column>
            </Columns>
        </>
    // <>
    //     {/* <img src={user.avatar_url} alt={user.name} />
    //     <h3>{user.name}</h3> */}
    //     <ul>
    //     {repoData.map(repo => (
    //         <li key={repo.id}>{repo.name}</li>
    //     ))}
    //     </ul>
    // </>
    );
}

export default UserProfile;