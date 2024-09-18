import { useState } from "react"
import UserInput from "./componets/User-input"
import img from "./assets/investment-calculator-logo.png"
import { calculateInvestmentResults } from "./utill/investment"
import Table from "./componets/Table"


function App(){
  const [label, setLabel] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })


  function handleChange(target){
    
    setLabel( (prevState => {
      const eventValue = Number(target.value )
      const changeingState = target.id
      return {...prevState, [changeingState]: eventValue }

      }
    ));
  }
  
  const investmentResult = calculateInvestmentResults(label)

  return <>
  
  <header id="header">
    <img src={img} alt="" />
    <h1> Investment Calculator </h1>
  </header>

  <UserInput label={label} onEdit={handleChange}/>
  <Table tableList={calculateInvestmentResults(label)} />

  </>
  
}
export default App