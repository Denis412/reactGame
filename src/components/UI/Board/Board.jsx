import React, {useState} from 'react';
import Square from "../Square/Square";

import classes from "./board.module.css";

const Board = (props) => {
    const [values, setValues] = useState([
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
    ]);
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

    const [step, setStep] = useState(1);

    function handleClick(index) {
        const newValues = [];

        for(let i = 0; i < values.length; i++)
            newValues[i] = Object.assign({}, values[i]);

        setStep(step + 1);

        newValues[index].value = (step % 2 === 0 ? 'О' : 'Х');
        newValues[index].disable = true;

        let findWinner = checkWin(newValues);

        if(findWinner) {
            setStep(1);
            for (let i = 0; i < newValues.length; i++) {
                newValues[i].disable = true;
            }
        }

        setValues(newValues);
    }
    function checkWin(squares) {
        for(let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];

            if(squares[a].value) {
                if(squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
                    props.updateWinner(squares[a].value);
                    return squares[a].value;
                }
            }
        }
        return null;
    }

    return (
        <div className={classes.board}>
            <h1
                className={classes.header}
            >
                Текущий ход: {step % 2 === 0 ? 'О' : 'Х'}
            </h1>
            <div
                className={classes.row}
            >
                <Square
                    onClick={() => handleClick(0)}
                    value={values[0].value}
                    disabled={values[0].disable}
                />
                <Square
                    onClick={() => handleClick(1)}
                    value={values[1].value}
                    disabled={values[1].disable}
                />
                <Square
                    onClick={() => handleClick(2)}
                    value={values[2].value}
                    disabled={values[2].disable}
                />
            </div>
            <div
                className={classes.row}
            >
                <Square
                    onClick={() => handleClick(3)}
                    value={values[3].value}
                    disabled={values[3].disable}
                />
                <Square
                    onClick={() => handleClick(4)}
                    value={values[4].value}
                    disabled={values[4].disable}
                />
                <Square
                    onClick={() => handleClick(5)}
                    value={values[5].value}
                    disabled={values[5].disable}
                />
            </div>
            <div
                className={classes.row}
            >
                <Square
                    onClick={() => handleClick(6)}
                    value={values[6].value}
                    disabled={values[6].disable}
                />
                <Square
                    onClick={() => handleClick(7)}
                    value={values[7].value}
                    disabled={values[7].disable}
                />
                <Square
                    onClick={() => handleClick(8)}
                    value={values[8].value}
                    disabled={values[8].disable}
                />
            </div>
        </div>
    );
};

export default Board;