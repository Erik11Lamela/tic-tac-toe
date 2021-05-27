import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    renderSquareComponent(i) {
        return <Square  value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)} />
    }
    render() {
        return (
            <div>
                <div className = "board-design">
                    <div className = "row-1">
                        {this.renderSquareComponent(0)}
                        {this.renderSquareComponent(1)}
                        {this.renderSquareComponent(2)}
                    </div>
                    <div className = "row-2">
                        {this.renderSquareComponent(3)}
                        {this.renderSquareComponent(4)}
                        {this.renderSquareComponent(5)}
                    </div>
                    <div className = "row-3">
                        {this.renderSquareComponent(6)}
                        {this.renderSquareComponent(7)}
                        {this.renderSquareComponent(8)}
                    </div>
                </div>
            </div>
        )
    }
}

