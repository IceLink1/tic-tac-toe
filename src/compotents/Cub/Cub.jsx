import React , { useState }from 'react'
import "./Cub.css"

export default function Cub({state,setState}) {
  const [value,setValue] = useState("")

   
function  onClickToe() {
    if (value === "" && state === 0) {
      setValue("X")
      setState(1)
      console.log(value ,state);
    }
    if(value === "" && state ===1 ){
      setState(0)
      setValue("O")
    }
  }

  return (
    <div className='cub' onClick={onClickToe}>{value}</div>
  )
}
