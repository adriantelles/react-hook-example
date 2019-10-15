/* eslint-disable no-unused-vars */
import React, { useRef} from 'react'

export const useCountRenders =() => {
    const renders = useRef(0)
    console.log('renders: ', renders.current++)
}
