import React, { Component } from 'react';
import ScoreboardItem from './scoreboarditem'

export default class Scoreboard extends React.Component {    
    constructor (props) {
        super(props)
        let data = undefined;
        const getData=()=>{
            fetch('../data/data.json',
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function(response){
                //console.log(response)
                return response.json();
            }).then(function(myJson) {
                data = myJson;
            });
        }
        getData();
        this.state = {data:data};
    }
    render() {
        const data = this.state.data;
        const items = data.map(item =>
            <ScoreboardItem key={item.userID} value={item}/>
        );
        return (            
            <ol>
                {items}
            </ol>
        );
    }
}
