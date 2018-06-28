import React from 'react';
import PropTypes from 'prop-types';

const CharacterHover = props => {
    console.log(props.hover)
    return (
        <div>
            {
                props.player1 === null ? (
                    <img src={props.hover ? (props.hover) : (require("../assets/knight-placeholder.png"))} className="img-responsive" alt=""/>
                ) : (<img src={props.player1} className="img-responsive" alt="" /> )
            }
            {
                props.player2 === null ? (
                    <img src={props.hover ? (props.hover) : (require("../assets/knight-placeholder.png"))} className="img-responsive" alt=""/>
                ) : (<img src={props.player2} className="img-responsive" alt="" /> )
            }
            {
                props.player3 === null ? (
                    <img src={props.hover ? (props.hover) : (require("../assets/knight-placeholder.png"))} className="img-responsive" alt=""/>
                ) : (<img src={props.player3} className="img-responsive" alt="" /> )
            }
            {
                props.player4 === null ? (
                    <img src={props.hover ? (props.hover) : (require("../assets/knight-placeholder.png"))} className="img-responsive" alt=""/>
                ) : (<img src={props.player4} className="img-responsive" alt="" /> )
            }
            {
                props.player5 === null ? (
                    <img src={props.hover ? (props.hover) : (require("../assets/knight-placeholder.png"))} className="img-responsive" alt=""/>
                ) : (<img src={props.player5} className="img-responsive" alt="" /> )
            }
        </div>    
    );
};

CharacterHover.propTypes = {
    hover: PropTypes.string
};

export default CharacterHover;