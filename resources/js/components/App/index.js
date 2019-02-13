import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header';
import Component404 from '../../views/Component404';
import Main from '../../views/Main';
import CVInfo from '../../views/CVInfo';

export default class App extends Component {
    render() {
        console.log('entre');
        return (
            <Router>
                <main>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={()=><Main />} />
                        <Route exact path="/quisoc/" component={()=><CVInfo />} />
                        <Route component={()=><Component404 />} />
                    </Switch>
                    <footer>Designed by Veenders</footer>
                </main>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));
