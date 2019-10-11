import React, {useEffect, useState} from 'react';
import {useForm} from "./useForm"
import { Hello } from './Hello';


const App = () => {
  const [values, handleChange] = useForm({ 
    email:'', password:'', firstName :''
  })

  // useEffect(()=>{
  //   const onMouseMove = e=>{
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return ()=>{ // cleanup
  //     window.removeEventListener('mousemove',onMouseMove)
  //     console.log("unmount")
  //   }
  // },[])

  // const [showHello, setShowHello] = useState(true)

  return (
    <div>
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
