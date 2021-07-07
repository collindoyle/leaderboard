import React, { Component } from 'react';
import ScoreboardItem from './scoreboarditem'

export default class Scoreboard extends React.Component {    
    constructor (props) {
        super(props)
        this.state = {isLoaded: false, data: null};     
    }
    componentDidMount () {
        const getData = async ()=>{
            const response = await fetch('/data/data.json',
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await response.json();
            //this.state.data = data;
            //this.state.isLoaded = true;
            this.setState({data: data, isLoaded: true})
            this.forceUpdate();
        };
        getData();
    }
    
    
    render() {
        if(this.state.isLoaded === false) {
            return (
                <div>Loading...</div>
            )
        }
        else {
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
}
