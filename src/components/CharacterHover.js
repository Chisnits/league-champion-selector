import React from 'react';
import PropTypes from 'prop-types';

const CharacterHover = props => {
    console.log(props.activePlayer)
    if(props.activePlayer === "Player1"){
    return (
            <img src={props.hover ? (props.hover) : require("../assets/knight-placeholder.png")} className="img-responsive" alt=""/>
    );
} else if (props.activePlayer === "Player2"){
    return (
        <img src={props.hover ? (props.hover) : require("../assets/knight-placeholder.png")} className="img-responsive" alt=""/>
);
} else return null
};

CharacterHover.propTypes = {
    hover: PropTypes.string
};

export default CharacterHover;