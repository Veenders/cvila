import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img alt="logo Carles Vila" src="img/LogoCvila.png" />
                    <div className="logoText">
                        <h1>CVila.net</h1>
                        <span>Creant ponts entre <br />la tecnologia i les persones</span>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Inici</Link></li>
                        <li><Link to="/quisoc/">Qui sóc</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
