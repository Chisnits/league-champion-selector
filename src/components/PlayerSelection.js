import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PlayerSelections = props => {
    return (
            <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
    );
};

PlayerSelections.propTypes = {
    playerSelection: PropTypes.string
};

export default PlayerSelections;