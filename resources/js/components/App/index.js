import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Jumbotron from '../Jumbotron';

export default class App extends Component {
    render() {
        console.log('entre');
        return (
            <main>
                <Header />
                <Jumbotron />
            </main>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));
