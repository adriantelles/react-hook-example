import React, {useRef, useState, useEffect} from 'react'

import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

export const Hello= () => {
    // const renders = useRef(0)
    const [count, setCount] = useState(()=>
    JSON.parse(localStorage.getItem('count')))

    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
    useEffect(()=>{
        localStorage.setItem("count",JSON.stringify(count))
    }, [count])

    const divRef = useRef()
    const rect = useMeasure(divRef,[data]);

    return (
        <div>
            <div style = {{ display: "flex" }}>
                <div ref= {divRef} >{loading? 'loading....': data}</div>
            </div>
            <div>
                <pre>{JSON.stringify(rect,0,2)}</pre>
            </div>
            <div>count: {count}</div>
            <button onClick={()=>setCount(c => c + 1)}> Increment</button>
        </div>
    )
}