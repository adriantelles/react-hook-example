import React, { useState , useCallback } from 'react'
import { Hello } from './Hello'
import { Square } from './sqaure'

const App = ()=>{

  const [count, setCount] = useState(0)
  const favoriteNums = [7,21,37]
  
  const increment = useCallback((n)=>{
    setCount( c => c + n )
  },[setCount])


  return(
    <div>
      <Hello increment = {increment}/>
      <div>count: {count}</div>
      {favoriteNums.map((n)=>{
        console.log(n)
        return(
          <Square increment = {increment} key = {n} n = {n} />
        )
      })}
    </div>
  )
}

export default App;