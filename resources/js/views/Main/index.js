import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import Blog from '../../components/Blog';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
                <Blog />
            </React.Fragment>
        );
    }
}

export default Main;
