import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutProgress = ({ shipping,payment}) => {
  return (
    <div className='d-flex gap-2 mx-5 px-5'>
      
      <Link to='/confirmorder' className='btn btn-success'>Confirm Order</Link>
      {
        shipping ?
          <Link to='/shipping' className='btn btn-success'>Shipping</Link> :
          <Link to='/shipping' className='btn btn-secondary disabled' >Shipping</Link>

      }
      {
        payment ?
          <Link to='/payment' className='btn btn-success'>Payment</Link> :
          <Link to='/payment' className='btn btn-secondary disabled' >Payment</Link>
      }

    </div>
  )
}

export default CheckoutProgress