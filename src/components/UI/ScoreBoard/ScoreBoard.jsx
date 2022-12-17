import React, {useState} from 'react';
import classes from "./ScoreBoard.css";
import ScoreList from "./ScoreList/ScoreList";

const ScoreBoard = (props) => {
    function updateScoreBoard() {
        if(props.winner) {
            let element = document.createElement('li');
            element.innerHTML = `<h3>Победитель: ${props.winner}</h3>`;
            document.querySelector('ul').appendChild(element);
        }
    }

    return (
        <div>
            <h1>Таблица победителей:</h1>
            <ul>
                {updateScoreBoard()}
            </ul>
        </div>
    );
};

export default ScoreBoard;