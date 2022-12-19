import React from 'react';
import Board from "./UI/Board/Board";
import WinMessage from "./WinMessage/WinMessage";
import classes from "./Game.module.css";
import RestartGameButton from "./UI/Buttons/RestartGameButton/RestartGameButton";
import ScoreBoard from "./UI/ScoreBoard/ScoreBoard";
import ClearScoreBoardButton from "./UI/Buttons/ClearScoreBoardButton/ClearScoreBoardButton";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            restart: false,
            winners: [],
        }
    }

    renderBoard() {
        return (
            <Board
                updateWinner={this.updateWinner}
            />
        );
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

        this.setState({
            winner: value,
            winners: newWinners,
        });
    }

    render() {
        return (
            <div className={classes.gameContainer}>
                <header
                    className={classes.gameHeader}
                >
                    <WinMessage winner={this.state.winner}/>
                </header>
                <main className={classes.gameMain}>
                    <div
                        className={classes.leftSide}
                    >
                        <RestartGameButton onClick={() => {}}/>
                    </div>
                    <div
                    >
                        {this.renderBoard()}
                    </div>
                    <div
                        className={classes.rightSide}
                    >
                        <ScoreBoard scoreList={this.state.winners}/>
                        <ClearScoreBoardButton />
                    </div>
                </main>
            </div>
        )
    }
}

export default Game;