import React from 'react'

const customButton = ({btnClass, handleClick, children}) => {
    return (
        <button className={`${btnClass}`} onClick={handleClick} >{children}</button>
    )
}

export default customButton