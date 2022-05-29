/* eslint max-classes-per-file: 0 */ // --> OFF
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Square(): JSX.Element {
    return (
        <button type="button" className="square">
            {/* TODO */}
        </button>
    )
}

class Board extends React.Component {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    renderSquare(i: number): JSX.Element {
        return <Square />
    }

    render(): JSX.Element {
        const status = 'Next player: X'

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

// ========================================

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(<Game />)
