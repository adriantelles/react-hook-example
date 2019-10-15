import React , { useContext } from 'react'
import { UserContext } from '../userContext'


export const About = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2>About</h2>
            <prev>{JSON.stringify(user,null,2)}</prev>
        </div>
    )
}
