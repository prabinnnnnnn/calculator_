function Display({displayValue}){
  return (
    <input className='display' readOnly placeholder="Enter a Number"type="text" value={displayValue}/>
  )
}

export default Display;