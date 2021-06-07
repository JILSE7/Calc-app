import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
export const Funcions = ({onContetnClear, onDelete}) => (
        <>
            <section className="functions">
                <Button type={'button-long-text'} text="Clear" onclickHandler= {onContetnClear}/>
                <Button text="&larr;" onclickHandler={onDelete}/>
            </section>
        </>
)

Funcions.propTypes = {
    onContetnClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

