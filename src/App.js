/*eslint no-eval: 0 */
import React, { useState } from 'react';
import { Result } from './components/Result';

//Css
import './App.css' 
import { MathOperations } from './components/MathOperations';
import { Funcions } from './components/Funcions';
import { Numbers } from './components/Numbers';


export const App = () => {
    //UseState
    const [stack, setStack] = useState("");
    //Loadashword
    // const word = words(stack, /[^-^+^*^/]+/g);
    


    //Funciones
    const onclickHandler = (number) =>{
        console.log("Click en number", number)
        setStack(`${stack}${number}`)
    }

    const onclickOperation = (operation)=>{
        console.log("Operation:", operation)
        setStack(`${stack}${operation}`)
    }
    
    const onclickEqual = (equal)=>{
        console.log("Equal:", equal)
        setStack(eval(stack).toString())
    }

    return (
        <main className='react-calculator'>
        <Result value={stack} />
        
        <Numbers onclickHandler={onclickHandler}/>
    
        <Funcions onContetnClear={() => setStack("")} onDelete={()=> {
            if (stack.length > 0) {
                const newStack = stack.substring(0, stack.length - 1)
                console.log("onDelete", newStack)
                setStack(newStack)
            }
            
        }}/>

        <MathOperations onclickEqual={onclickEqual} onclickOperation={onclickOperation}/>
        
    </main>
    )
}
