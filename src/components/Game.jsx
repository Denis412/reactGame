import React from 'react';
import Board from "./UI/Board/Board";
import WinMessage from "./WinMessage/WinMessage";
import classes from "./Game.module.css";
import MyButton from "./UI/Button/MyButton";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: null,
        }
    }

    updateData = (value) => this.setState({winner: value});

    render() {
        return (
            <div className={classes.gameContainer}>
                <header className={classes.gameHeader}>
                    <WinMessage winner={this.state.winner}/>
                </header>
                <main className={classes.gameMain}>
                    <div className={classes.leftSide}>
                    </div>
                    <div>
                        <Board updateData={this.updateData}/>
                    </div>
                    <div className={classes.rightSide}></div>
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Game;