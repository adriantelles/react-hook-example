import React, {useState, useRef} from 'react';
import {useForm} from "./useForm"
import { Hello } from './Hello';


const App = () => {
  const [values, handleChange] = useForm({ 
    email:'', password:'', firstName :''
  })


  const inputRef = useRef()
  const hello = useRef(()=>console.log('hello'))
  const [showHello, setShowHello] = useState(true)

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect())
  //   return () => {
      
  //   };
  // }, [])

  return (
    <div style={{padding: "10px"}}>
      <>
        <button onClick = {()=>setShowHello(showHello=>!showHello)}> tootle
        </button>
        {showHello && <Hello/ >}
        <input ref = {inputRef} name ='email' value = {values.email} onChange={handleChange} />
        {/* <input name="email" value = {values.email} onChange={handleChange}/> */}
        <input name="firstName" value = {values.firstName} placeholder = "first name" onChange={handleChange}/>
        <input type="password" name = "password" value = {values.password} onChange={handleChange}  />
        
        <button onClick={()=>{
          inputRef.current.focus();
          hello.current();
        }}>focus</button>
      </>
    </div>
  )
}

export default App;
