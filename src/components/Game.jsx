import React, {useState} from 'react';
import Board from "./UI/Board/Board";
import WinMessage from "./WinMessage/WinMessage";
import classes from "./Game.module.css";
import RestartGameButton from "./UI/Buttons/RestartGameButton/RestartGameButton";
import ScoreBoard from "./UI/ScoreBoard/ScoreBoard";
import ClearScoreBoardButton from "./UI/Buttons/ClearScoreBoardButton/ClearScoreBoardButton";

const Game = () => {
    const [winner, setWinner] = useState(null);
    const [values, setValues] = useState([
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
        {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
    ]);
    const [winnersNames, setWinnersNames] = useState(JSON.parse(localStorage.getItem("winners")) ?? []);
    const [winnersValues, setWinnersValues] = useState(JSON.parse(localStorage.getItem("values")) ?? []);

    const updateWinner = (value) => {
        const newWinner = {
            name: value,
            id: winnersNames.length + 1,
        };


        localStorage.setItem("winners", JSON.stringify([
            ...(JSON.parse(localStorage.getItem("winners")) ?? []),
            newWinner
        ]));

        setWinner(value);
        setWinnersNames([...winnersNames, newWinner]);
    }
    const updateValues = (value, index, checkWin) => {
        let newValues = [];

        for(let i = 0; i < values.length; i++) {
            newValues[i] = Object.assign({}, values[i]);
        }

        newValues[index].value = value;
        newValues[index].disable = true;

        setValues(newValues);

        let findWinner = checkWin(newValues);

        if(findWinner) {
            for(let i = 0; i < newValues.length; i++) {
                newValues[i].disable = true;
            }
            setWinnersValues(newValues);

            localStorage.setItem("values", JSON.stringify([
                ...(JSON.parse(localStorage.getItem("values")) ?? []),
                newValues
            ]));
        }

        return findWinner
    }
    const restartGame = () => {
        setWinner(null);
        setValues([
            {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
            {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
            {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
        ]);
    }
    const loadValues = (index) => {
        setValues(
            JSON.parse(localStorage.getItem("values"))[index],
        );
    }
    const clearScoreBoard = () => {
        setWinnersNames([]);
        setWinnersValues([]);

        localStorage.removeItem("winners");
        localStorage.removeItem("values");
    }

    return (
        <div className={classes.gameContainer}>
            <header className={classes.gameHeader}>
                <WinMessage
                    winner={winner}
                />
            </header>
            <main className={classes.gameMain}>
                <div className={classes.leftSide}>
                    <RestartGameButton onClick={() => restartGame()}/>
                </div>
                <div>
                    <Board
                        values={values}
                        updateValues={updateValues}
                        updateWinner={updateWinner}
                    />
                </div>
                <div className={classes.rightSide}>
                    <ScoreBoard loadValues={loadValues} scoreList={winnersNames}/>
                    <ClearScoreBoardButton onClick={() => clearScoreBoard()}/>
                </div>
            </main>
        </div>
    )
}

export default Game;