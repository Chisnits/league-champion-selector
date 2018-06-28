import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PlayerSelections = props => {
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
        {   props.activePlayer === "player3" ?  (
        <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
            ):(
        <div></div>
        )}
        {   props.activePlayer === "player4" ?  (
        <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
            ):(
        <div></div>
        )}
        {   props.activePlayer === "player5" ?  (
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