import React from 'react'
import { Button } from './Button'

export const Numbers = ({onclickHandler}) => {
    const numbers = [7,8,9,4,5,6,1,2,3,0]
    return (
        <section className="numbers">
        {
            numbers.map(number => (
                <Button text={number} onclickHandler = {onclickHandler} key={number}/>
            ))
        }
        </section>
    )
}
