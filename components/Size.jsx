import React, { useState } from 'react'

export default function Sizes({sizes}) {
    const [state, setState] = useState('white')
    const [size, setSize] = useState()

    const sizeClicked = () => {
        var checked = localStorage.getItem('checked') || 0
        if(checked == 0 && state == 'white') {
            setState('gray')
            localStorage.setItem('checked', checked+1)
            localStorage.setItem('size', sizes)
            }
        if(state == 'gray'){
            setState('white')
            localStorage.setItem('checked', checked-1)}
        if(checked == 1 && state == 'white'){
            alert('remove size')
        }
    } 
    return (
        <div className='size-button' style={{backgroundColor: state}} onClick={sizeClicked}>{sizes}</div>
    
    )
}
