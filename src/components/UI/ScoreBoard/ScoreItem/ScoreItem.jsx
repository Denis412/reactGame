import React from 'react';
import classes from "./ScoreItem.module.css";

const ScoreItem = (props) => {
    return (
        <div className={classes.scoreItem}>
            {props.winner.id}. Победитель - {props.winner.name}
        </div>
    );
};

export default ScoreItem;