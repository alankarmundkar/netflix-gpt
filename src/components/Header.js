import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <header className=" px-8 bg-gradient-to-b from-black" >
        <img className="w-44" src={LOGO} alt="logo" />
    </header>
  )
}

export default Header