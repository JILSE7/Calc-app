import React from 'react'
import Proptypes from 'prop-types'
import { Button } from './Button'
export const MathOperations = ({onclickOperation, onclickEqual}) => {

    const operators = ["+", "-", "*", "/", "="];

    return (
        <section className="math-operations">
            <div className="math-operation">
              {
                  operators.map((operator, i) => (
                      <Button text={operator} onclickHandler ={(operator === "=") ? onclickEqual : onclickOperation} key={i+1}/>
                  ))
              }
            </div>
        </section>
    )
}

MathOperations.propTypes = {
    onclickOperation: Proptypes.func.isRequired, 
    onclickEqual: Proptypes.func.isRequired 
}
