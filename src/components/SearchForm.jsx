import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Hero, HeroBody, Container, Title, Subtitle} from 'bloomer';

import UserCardList from "./UserCardList";
import UserProfile from "./UserProfile";

class SearchForm extends Component {
    state = {
        username: "",
        userData: [],
    };

    handleChange = event => {
        this.setState({
          username: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
    
        const { username } = this.state;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
    
        this.setState({
            userData: [...this.state.userData, data],
            username: ""
        });
    };

    render() {
        const { username, userData } = this.state;

        return (
            <>
                <Hero isColor='info'>
                    <HeroBody>
                        <Container hasTextAlign='center'>
                        <Title>
                            Github User Query with Controlled Components
                        </Title>
                        <Subtitle>
                        An React app that queries the Github Users API for profile information on a specific user.
                        </Subtitle>
                        </Container>
                    </HeroBody>
                </Hero>
                <Router>
                    <div>
                    <nav>
                        <Link to='/'>Home</Link>
                    </nav>
                    </div>
                    <Route path="/" exact>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={username}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Submit</button>
                        </form>
                        <br/>
                        <UserCardList userData={userData} />
                    </Route>
                    <Route path="/user/:username">
                        <UserProfile userData={userData} />
                    </Route>
                </Router>
            </>
        );
    }
}

export default SearchForm;