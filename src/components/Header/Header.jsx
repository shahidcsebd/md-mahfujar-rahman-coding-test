import React from 'react'

const Header = ({children}) => {
    console.log(children)
  return (
    <h2>Intro: {children}</h2>
  )
}

export default Header