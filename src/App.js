import React, {useEffect, useState} from 'react';
import {useForm} from "./useForm"
// import { Hello } from './Hello';
import { useFetch } from './useFetch';


const App = () => {
  const [values, handleChange] = useForm({ 
    email:'', password:'', firstName :''
  })
  const [count, setCount] = useState(()=>
    JSON.parse(localStorage.getItem('count')))

  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(()=>{
    localStorage.setItem("count",JSON.stringify(count))
  }, [count])


  // const [showHello, setShowHello] = useState(true)

  return (
    <div>
      <div>
        {loading? 'loading....': data}
        <div>count: {count}</div>
        <button onClick={()=>setCount(c => c + 1)}> Increment</button>
      </div>
      <>
      
        {/* <button onClick = {()=>setShowHello(showHello=>!showHello)}> tootle
        </button>
        {showHello && <Hello/ >} */}
        
        <input name="email" value = {values.email} onChange={handleChange}/>
        <input name="firstName" value = {values.firstName} placeholder = "first name" onChange={handleChange}/>
        <input type="password" name = "password" value = {values.password} onChange={handleChange}  />
      </>
    </div>
  )
}

export default App;
