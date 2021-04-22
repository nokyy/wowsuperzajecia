import React from 'react';

interface cw1Props{
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Cw1:React.FC<cw1Props> = (props) => {
    const def = 10;
    const [int, setInt] = React.useState(props.initialNumber || def);

    const increment = () => {
        const number =  int + 1;
        setInt(number);
        props.onNumberChange && props.onNumberChange(number);
    }
    const decrement = () => {
        const number =  int - 1;
        setInt(number);
        props.onNumberChange && props.onNumberChange(number);
    }
    const setdefault = () => {
        const number =  def;
        setInt(number);
        props.onNumberChange && props.onNumberChange(number);
    }


    return(
        <div>
            <button onClick = {increment} >+</button>
            {int}
            <button onClick = {decrement} >-</button>
            <button onClick = {setdefault} >default</button>
        </div>
        
    );
}

export default Cw1;