import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Display from './components/input'



function App(){

  const [calcultorValue, setCalculatorValue] = useState('')

  const buttonClick = (buttonText)=>{

    if(buttonText === 'C'){
      setCalculatorValue('')
    }
    else if(buttonText === '='){
      const result = eval(calcultorValue)
      setCalculatorValue(result)
    }
    else{
      const newDisplayValue = calcultorValue + buttonText
      setCalculatorValue(newDisplayValue)
    }
  }

  return (
    <>
    <div className="container">
      <Display displayValue={calcultorValue}></Display>
      <Button onclickButton={buttonClick}></Button>
    </div>
    </>
  )
}

export default App
