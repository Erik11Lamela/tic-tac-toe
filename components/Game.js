import React, { Component, useState } from 'react'
import Board from './Board';
import { Grid, Cell } from 'react-mdl';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xTurn: true ,
            score: [0,0],
            turnNumber: 0,            
            prevTurns: [
                {squares: Array(9).fill(null)}
            ]
            
        }            
    }
    handleClick(i){        
        const prevTurns = this.state.prevTurns.slice(0,this.state.turnNumber+1)
        const current = prevTurns[prevTurns.length - 1]
        const score = this.state.score;
        const squares = current.squares.slice();
        if (squares[i]) return;
        squares[i] = this.state.xTurn? 'X': '0';
      
        this.setState({
            prevTurns: prevTurns.concat({
                squares: squares
            }),
            xTurn: !this.state.xTurn,
            turnNumber: prevTurns.length,
            score: score
        });
        if (getResult(squares)!== null || (this.state.turnNumber > 7 && getResult(squares) === null)){
            if (getResult(squares) === 'X') score[0] ++
            if (getResult(squares) === '0') score[1] ++
            if (this.state.turnNumber > 7 && getResult(squares) === null) {window.alert("nobody wins")} else window.alert("Player "+ getResult(squares)+ " wins")
            for(var i=0;i<squares.length;i++){
                squares[i] = "";
            }
            this.setState({
                 xTurn: true ,                 
                 turnNumber: 0,            
                 prevTurns: [
                {squares: Array(9).fill(null)}
                ]
            });
        } 
       
    }
    render() {
        const prevTurns = this.state.prevTurns
        const current = prevTurns[this.state.turnNumber]
        
        return (
            <div className = "game-design">
                <div className = "game-board-design">                   
                    <p className= "score-X"> Player X - {this.state.score[0]}</p>                       
                    <Board onClick = {(i)=> this.handleClick(i)}
                            squares = {current.squares}/>                        
                     <p className= "score-0"> Player 0 - {this.state.score[1]}</p>                                                          
                </div>                
            </div>
        )
    }
}
function getResult(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (var i  = 0; i< lines.length;i++){
        var [a,b,c] = lines[i];
        if (squares[a] === squares[b] && squares[c] === squares[b] && squares[a] !== null)
         if (squares[a]==='X'){ return 'X' } else return '0'
        
    }
    return null
}