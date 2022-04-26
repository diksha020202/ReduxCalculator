import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';



const Shop = () => {
    const dispatch= useDispatch();
    const actions= useDispatch();
    const {minusMoney,addMoney} =bindActionCreators(actionCreators,dispatch)
    const {multMoney,divideMoney}=bindActionCreators(actionCreators,dispatch)

  return (
      <>
    <div>
        <h2>Increment/Decrement in React/Redux</h2>
        <button className='btn btn-primary mx-2' onClick={()=>{minusMoney(1)}}>-</button>
        Add/Minus
        <button className='btn btn-primary' onClick={()=>{addMoney(1)}}>+</button>
    </div>
    <div>
        <h2>Multiplication/Division in React/Redux</h2>
        <button className='btn btn-primary mx-2' onClick={()=>{multMoney(10)}}>*</button>
        Multiply/Divide
        <button className='btn btn-primary' onClick={()=>{divideMoney(10)}}>/</button>
    </div>
    </>
  )
}

export default Shop;
