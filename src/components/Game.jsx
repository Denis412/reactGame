import React from 'react';
import Board from "./UI/Board/Board";
import WinMessage from "./WinMessage/WinMessage";
import classes from "./Game.module.css";
import RestartGameButton from "./UI/Button/RestartGameButton";
import ScoreBoard from "./UI/ScoreBoard/ScoreBoard";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            restart: false,
        }
    }

    renderBoard() {
        return (
            <Board
                updateWinner={this.updateWinner}
            />
        );
    }

    updateWinner = (value) => this.setState({winner: value});
    restartGame = () => {
        this.setState({
            winner: null,
            restart: !this.state.restart
        });
    };

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
                        className={classes.leftSide}>
                        <RestartGameButton
                            onClick={this.restartGame}
                        />
                    </div
                    >
                    <div
                    >
                        {this.state.restart ? this.restartGame() : this.renderBoard()}
                    </div
                    >
                    <div
                        className={classes.rightSide}
                    >
                        <ScoreBoard winner={this.state.winner}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Game;