import React, { useState } from 'react'

const Calculator = () => {


    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


function handleSum(){
    setResult(num1+num2)
}
function handleSubstraction(){
    setResult(parseInt(num1-num2))
}
function handleMultiply(){
     setResult(parseInt(num1*num2))
}
function handleDivision(){
     setResult(parseInt(num1/num2))
}


    return (
        <div className='calculator'>
            <h1>React Calculator</h1>
            <form>
                <input type='text' 
                placeholder='Num 1'
                value={num1} id='num1' 
                onChange={
                    (e) => setNum1(e.target.value)
                } />
                <input type='text' 
                placeholder='Num 2' 
                value={num2} id='num2' 
                onChange={
                    (e) => setNum2(e.target.value)
                } />
                <div className='btn-div'>
                    <button id='sum-btn' onClick={handleSum}>+</button>
                    <button id='minus-btn' onClick={handleSubstraction}>-</button>
                    <button id='multiply-btn' onClick={handleMultiply}>*</button>
                    <button id='divide-btn' onClick={handleDivision}>/</button>
                </div>
                <div>         
                    <p id='result-message'>{result}</p>
                </div>

            </form>
            {
                result?<p>hi world</p>: <p>helloo world</p>
            }
        </div>
    )
}

export default Calculator