import React, {useEffect} from 'react';
import {useForm} from "./useForm"


const App = () => {
  const [values, handleChange] = useForm({ 
    email:'', password:'', firstName :''
  })

  useEffect(()=>{
    console.log("render")

    return ()=>{
      console.log('unmount')
    }
  },[])

  return (
    <div>
      <>
        <input name="email" value = {values.email} onChange={handleChange}/>
        <input name="firstName" value = {values.firstName} placeholder = "first name" onChange={handleChange}/>
        <input type="password" name = "password" value = {values.password} onChange={handleChange}  />
      </>
    </div>
  )
}

export default App;
