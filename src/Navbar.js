import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount= useSelector(state=>state.amount)
    const amount2= useSelector(state=>state.amount2)
  return (
      <>
    <div>
        <button className='btn-primary'>Plus/Minus:{amount}</button>
    </div>
    <div>
        <button className='btn-primary'>Multiply/Divide:{amount2}</button>
    </div>
    
    
    </>
  )
}

export default Navbar