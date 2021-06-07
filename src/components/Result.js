import React from 'react';

import PropTypes from "prop-types";

export const Result = ({value}) => (
        <section className="result">
            {value}
        </section>
    )


//Validacion de las properties
Result.propTypes = {
    value: PropTypes.string.isRequired
}

//Estableciendo valores por defecto
Result.defaultProps = {
    value: "0"
}
