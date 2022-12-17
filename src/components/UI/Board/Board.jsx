import React, {useState} from 'react';
import Square from "../Square/Square";
import WinMessage from "../../WinMessage/WinMessage";

import classes from "./board.module.css";

const Board = (props) => {
    const [values, setValues] = useState([
        null, null, null,
        null, null, null,
        null, null, null,
    ]);

    const [step, setStep] = useState(1);

    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const [winner, setWinner] = useState(null);

    function handlerClick(index) {
        let newValues = values.slice();

        newValues[index] = step % 2 === 0 ? 'O' : 'X';
        setStep(step + 1);

        setValues(newValues);

        setWinner(checkWin(newValues));
    }

    function checkWin(squares) {
        for(let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div className={classes.board}>
            <WinMessage winner={winner} />

            <h1 className={classes.header}>Текущий ход: {step % 2 === 0 ? 'O' : 'X'}</h1>
            <div className={classes.row}>
                <Square
                    onClick={() => handlerClick(0)}
                    value={values[0]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(1)}
                    value={values[1]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(2)}
                    value={values[2]}
                    disabled={winner}
                />
            </div>
            <div className={classes.row}>
                <Square
                    onClick={() => handlerClick(3)}
                    value={values[3]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(4)}
                    value={values[4]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(5)}
                    value={values[5]}
                    disabled={winner}
                />
            </div>
            <div className={classes.row}>
                <Square
                    onClick={() => handlerClick(6)}
                    value={values[6]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(7)}
                    value={values[7]}
                    disabled={winner}
                />
                <Square
                    onClick={() => handlerClick(8)}
                    value={values[8]}
                    disabled={winner}
                />
            </div>
        </div>
    );
};

export default Board;