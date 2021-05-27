import React from 'react'

export default function Square(props) {
    return (
        <button onClick = {props.onClick}  className = "square-design">
            {props.value}
        </button>
    )
}
