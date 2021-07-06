import React from 'react';

function Avatar (props) {
    return (
        <img src={props.src} alt={props.alt}/>
    );
}

export default class ScoreboardItem extends React.Component {
    render () {
        return (
            <li>
                <Avatar src={this.props.value.img} alt={this.props.value.displayName} />
                <span>{this.props.value.displayName}</span>
                <span>{this.props.value.score}</span>
            </li>
        );
    }
}