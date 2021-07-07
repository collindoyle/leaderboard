import React from 'react';

function Avatar (props) {
    return (
        <img src={props.src} alt={props.alt}/>
    );
}

export default class ScoreboardItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <li>
                <Avatar src={this.props.value.picture} alt={this.props.value.displayName} />
                <span>{this.props.value.displayName}</span>
                <span>{this.props.value.score}</span>
            </li>
        );
    }
    addScore () {
        //this.props.value.score += Math.floor(Math.random()*1000)
        console.log(Math.floor(Math.random()*1000))
    }
    componentDidMount() {
        this.intervalId = setInterval(this.addScore, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}