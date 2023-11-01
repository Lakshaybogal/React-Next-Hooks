import React from 'react'

const Button = ({ state, dim, dispatch }) => {
    const {row, col} = dim;
    return (
        <button
            className="w-16 h-16 border border-gray-400"
            onClick={() => dispatch({ type: 'MAKE_MOVE', payload: { row, col } })}
            disabled={state.board[row][col] || state.winner}
        >
            {state.board[row][col]}
        </button>
    )
}

export default Button