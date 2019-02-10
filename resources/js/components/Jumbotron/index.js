import React, { Component } from 'react';
import './index.scss';

class Jumbotron extends Component {
    constructor(props){
        super(props);
        this.state = {
            highlights:['Front End Developer','Laravel','React','PJ','Technology Enthusiast'],
            highlight: 'Front End Developer',
        }
        this.timer = null
    }
    componentDidMount(){
        this.timer = setInterval(this.setWord,5000);
    }
    setWord = () =>{
        const {highlights} = this.state;
        const index = Math.round(Math.random()*highlights.length);
        const highlight = highlights[index];
        this.setState({highlight})
    }
    componentWillUnmount(){
        clearInterval(this.time);
    }
    render() {
        const {highlight} = this.state
        return (
            <div className="Jumbotron">
                <span>{highlight}</span>
            </div>
        );
    }
}

export default Jumbotron;
