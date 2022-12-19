import React from 'react';

const ScoreItem = (props) => {
    return (
        <div>
            {props.winner.id}. Победитель - {props.winner.name}
        </div>
    );
};

export default ScoreItem;