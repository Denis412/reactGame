import React, {useState} from 'react';
import classes from "./ScoreBoard.css";
import scoreList from "./ScoreList/ScoreList";

const ScoreBoard = (props) => {
    function updateScoreBoard() {
        if(props.winner) {
            let element = document.createElement('li');
            element.innerHTML = `<h3>Победитель: ${props.winner}</h3>`;
            element.classList.add('scoreItem')
            document.querySelector('ol').appendChild(element);
        }
    }

    return (
        <div>
            <h1>Доска победителей:</h1>
            <ol>
                {updateScoreBoard()}
            </ol>
        </div>
    );
};

export default ScoreBoard;