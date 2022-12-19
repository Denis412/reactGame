import React from 'react';
import classes from "./ClearScoreBoardButton.module.css";

const ClearScoreBoardButton = (props) => {

    function clearScoreBoard() {
        let list = document.querySelector('#scoreBoard');
        while (list?.firstChild.nextSibling) {
            list.removeChild(list.firstChild.nextSibling);
        }
    }

    return (
        <button onClick={clearScoreBoard} className={classes.clearBtn}>
            Очистить доску победителей
        </button>
    );
};

export default ClearScoreBoardButton;