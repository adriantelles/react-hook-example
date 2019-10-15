import React, { useReducer , useState } from 'react'

// const reducer = (state, action)=>{
//   switch(action.type){
//     case 'increment':
//         return state + 1;
//     case 'decrement':
//         return state - 1;
//     default:
//         return state;
//   }
// }

const reducer = (state, action)=>{
  switch(action.type){
    case 'add-todo':
        return {...state ,todos:[...state.todos, {text: action.text, completed: false}]}
    case 'toogle-todo':
            return {todos: state.todos.map((t,index)=> index === action.index ? {...t, completed: !t.completed} : t)}
    default:
        return state;
  }
}
const App = ()=>{

  const [{todos}, dispatch] = useReducer(reducer, { todos: []})
  const [text, setText] = useState();
  return(
    <div>
      <div>
          <form onSubmit = {e=>{
            e.preventDefault();
            dispatch({type: "add-todo", text})
            setText("");
          }}>
            <input value = {text} onChange ={e=>setText(e.target.value)} />
          </form>
          {todos.map((t,idx)=>(
            <div key = {t.text} onClick = {()=>dispatch({type:'toogle-todo',index:idx})} style = {{textDecoration: t.completed ? 'line-through' : ''}}>
            {t.text}</div>
          ))}
      </div>

      <div>
        {/* <div>count: {count}</div>
        <button onClick= {()=>dispatch({type:'increment'})}>increment</button>
        <button onClick= {()=>dispatch({type:'decrement'})}>decrement</button> */}
      </div>
    </div>
  )
}

export default App;