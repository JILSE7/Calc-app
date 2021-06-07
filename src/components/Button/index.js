import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({type ,text, onclickHandler}) => (
        <button className={type} onClick={()=> onclickHandler(text)}>
            <span>{text}</span>
        </button>
    )


Button.propTypes = {
    type: PropTypes.string,
    onclickHandler: PropTypes.func.isRequired

}
