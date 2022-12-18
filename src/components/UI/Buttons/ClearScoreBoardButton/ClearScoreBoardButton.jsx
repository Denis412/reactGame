import React from 'react';
import classes from "./ClearScoreBoardButton.module.css";

const ClearScoreBoardButton = (props) => {

    function clearScoreBoard() {
        let list = document.querySelector('ol');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

    return (
        <button onClick={clearScoreBoard} className={classes.clearBtn}>
            Очистить доску победителей
        </button>
    );
};

export default ClearScoreBoardButton;