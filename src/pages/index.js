import React, {useContext} from 'react'
import { UserContext } from '../userContext'
import { login } from '../utils/login'

export const Index = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            <h2>Hello</h2>
            <prev>{JSON.stringify(user,null,2)}</prev>
            <button onClick = {async ()=>{
                const user = await login()
            }}>login</button>
        </div>
    )
}
