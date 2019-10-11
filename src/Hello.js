import React from 'react'

export const Hello= () => {
    React.useEffect(()=>{
        console.log("mount")
    
        return ()=>{
          console.log('unmount')
        }
    },[])

    
    return (
        <div>
            hello
        </div>
    )
}