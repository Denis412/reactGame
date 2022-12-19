import React from 'react';
import Board from "./UI/Board/Board";
import WinMessage from "./WinMessage/WinMessage";
import classes from "./Game.module.css";
import RestartGameButton from "./UI/Buttons/RestartGameButton/RestartGameButton";
import ScoreBoard from "./UI/ScoreBoard/ScoreBoard";
import ClearScoreBoardButton from "./UI/Buttons/ClearScoreBoardButton/ClearScoreBoardButton";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";
import clearScoreBoardButton from "./UI/Buttons/ClearScoreBoardButton/ClearScoreBoardButton";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            values: [
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
            ],
            winners: JSON.parse(localStorage.getItem("winners")) ?? [],
        }
    }
    updateWinner = (value) => {
        const newWinners = [];

        for(let i = 0; i < this.state.winners.length; i++) {
            newWinners[i] = Object.assign({}, this.state.winners[i]);
        }

        newWinners[newWinners.length] = {
            name: value,
            id: newWinners.length + 1
        };

        localStorage.setItem("winners", JSON.stringify(newWinners));

        this.setState({
            winner: value,
            winners: newWinners,
        });
    }
    updateValues = (value, index, checkWin) => {
        let newValues = [];

        for(let i = 0; i < this.state.values.length; i++) {
            newValues[i] = Object.assign({}, this.state.values[i]);
        }

        newValues[index].value = value;
        newValues[index].disable = true;

        this.setState({
            values: newValues,
        });

        let findWinner = checkWin(newValues);

        if(findWinner) {
            for(let i = 0; i < newValues.length; i++) {
                newValues[i].disable = true;
            }
        }

        return findWinner
    }
    restartGame() {
        this.setState({
            winner: null,
            values: [
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
                {value: null, disable: false}, {value: null, disable: false}, {value: null, disable: false},
            ],
        });
    }
    clearScoreBoard() {
        this.setState({
            winners: [],
        });

        localStorage.removeItem("winners");
    }

    render() {
        return (
            <div className={classes.gameContainer}>
                <header className={classes.gameHeader}>
                    <WinMessage
                        winner={this.state.winner}
                    />
                </header>
                <main className={classes.gameMain}>
                    <div className={classes.leftSide}>
                        <RestartGameButton onClick={() => this.restartGame()}/>
                    </div>
                    <div>
                        <Board
                            values={this.state.values}
                            updateValues={this.updateValues}
                            updateWinner={this.updateWinner}
                        />
                    </div>
                    <div className={classes.rightSide}>
                        <ScoreBoard scoreList={this.state.winners}/>
                        <ClearScoreBoardButton onClick={() => this.clearScoreBoard()}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Game;