/* eslint max-classes-per-file: 0 */ // --> OFF
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

type SquareProps = {
    value: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
type SquareState = Record<string, never>
class Square extends React.PureComponent<SquareProps, SquareState> {
    render(): JSX.Element {
        const { value, onClick } = this.props
        return (
            <button type="button" className="square" onClick={onClick}>
                {value}
            </button>
        )
    }
}

type BoardProps = Record<string, never>
type BoardState = {
    squares: string[]
}
class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props)
        this.state = { squares: Array(9).fill(null) }
        const { squares } = this.state
        squares[0] = 'x'
        squares[4] = 'O'
    }

    // eslint-disable-next-line class-methods-use-this
    handleClick(i: number): void {
        // eslint-disable-next-line no-console
        console.log(i)
    }

    renderSquare(i: number): JSX.Element {
        const { squares } = this.state
        return <Square value={squares[i]} onClick={() => this.handleClick(i)} />
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
