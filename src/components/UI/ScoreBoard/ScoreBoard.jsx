import React, {useState} from 'react';
import ScoreItem from "./ScoreItem/ScoreItem";

const ScoreBoard = (props) => {
    // function updateScoreBoard() {
    //     if(props.winner) {
    //         let element = document.createElement('li');
    //         element.innerHTML = `<h3>Победитель: ${props.winner}</h3>`;
    //         element.classList.add('scoreItem');
    //
    //         document.querySelector('ol').appendChild(element);
    //     }
    // }

    return (
        <div id="scoreBoard">
            <h1>Доска победителей:</h1>
            {props.scoreList?.map(winner =>
                <ScoreItem winner={winner} key={winner.id}/>
            )}
        </div>
    );
};

export default ScoreBoard;