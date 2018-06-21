import React from 'react';
import PropTypes from 'prop-types';

const CharacterHover = props => {
    return (
        <div>
            <img src={props.hover ? (props.hover) : require("../assets/knight-placeholder.png")} className="img-responsive"/>
        </div>
    );
};

CharacterHover.propTypes = {
    hover: PropTypes.string
};

export default CharacterHover;