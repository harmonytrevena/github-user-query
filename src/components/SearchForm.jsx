import React, { Component } from "react";

import UserCardList from "./UserCardList";

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
                <h1>Github User Query with Controlled Components</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <UserCardList userData={userData} />
            </>
        );
    }
}

export default SearchForm;