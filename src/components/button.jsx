function Button({onclickButton}){

  const btnNames = ['/','1','2','3','*','4','5','6','+','7','8','9','-','C','0','=']


  return (

          <div className="button-container">
              {btnNames.map((btnName)=> <button  key={btnName} onClick={()=> onclickButton(btnName)}> {btnName} </button> )}
          </div>
  )
}

export default Button;