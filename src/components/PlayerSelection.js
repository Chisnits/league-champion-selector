import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PlayerSelections = props => {
    if(props.activePlayer === "player1"){

    }
    return (<div>
        {   props.activePlayer === "player1" ?  (
        <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
            ):(
        <div></div>
        )}
        {   props.activePlayer === "player2" ?  (
        <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
            ):(
        <div></div>
        )}
    </div>);
};

PlayerSelections.propTypes = {
    playerSelection: PropTypes.string
};

export default PlayerSelections;