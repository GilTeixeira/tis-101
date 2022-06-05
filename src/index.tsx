/* eslint max-classes-per-file: 0 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

type SquareProps = {
    value: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Square(props: SquareProps): JSX.Element {
    const { value, onClick } = props
    return (
        <button type="button" className="square" onClick={onClick}>
            {value}
        </button>
    )
}

function calculateWinner(squares: string[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i]
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}

type BoardProps = Record<string, never>
type BoardState = {
    squares: string[]
    xIsNext: boolean
}
class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i: number): void {
        const { squares, xIsNext } = this.state
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = xIsNext ? 'X' : 'O'
        this.setState({
            squares,
            xIsNext: !xIsNext,
        })
    }

    renderSquare(i: number): JSX.Element {
        const { squares } = this.state
        return <Square value={squares[i]} onClick={() => this.handleClick(i)} />
    }

    render(): JSX.Element {
        const { squares, xIsNext } = this.state
        const winner = calculateWinner(squares)
        let status: string
        if (winner) {
            status = `Winner: ${winner}`
        } else {
            status = `Next player: ${xIsNext ? 'X' : 'O'}`
        }

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

const rootElement = document.getElementById('root')
if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<Game />)
}
