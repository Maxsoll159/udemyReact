import  PropType  from "prop-types";
import { useState } from "react"; 

export const CounterApp = ({value}) =>{
    //HOOKS
    const [counter,setCounter] = useState(value);
    const addCounter = () =>{
        setCounter(counter+1)
    }
    const resCounter = () =>{
        setCounter(counter-1)
    }
    const resetCounter = () =>{
        setCounter(value)
    }
    return(
        <div>
            <h1>ConterApp</h1>
            <h2>{counter}</h2>
            <button onClick={addCounter}>+1</button>
            <button onClick={resCounter}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>

    );
};

CounterApp.prototype = {
    value: PropType.number
};