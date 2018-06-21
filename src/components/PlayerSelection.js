import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PlayerSelections = props => {
    return (
        <div>
            <img src={props.playerSelection} className="img-responsive" alt="Character Selected"/>
        </div>
    );
};

PlayerSelections.propTypes = {
    playerSelection: PropTypes.string
};

export default PlayerSelections;