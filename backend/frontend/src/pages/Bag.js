import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { API } from '../config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { addToBag, removeFromBag } from '../redux/actions/bagActions'



const Bag = () => {
  const bag_items = useSelector(state => state.bag.bag_items)
  const dispatch = useDispatch()

  const reduceitemfromBag = (id, quantity) => e => {
    e.preventDefault()
    quantity--
    if (quantity <= 0) {
      dispatch(removeFromBag(id))
      toast.error("Item removed from cart")
      return
    }
    dispatch(addToBag(id, quantity))
    toast.success("item quantity decreased")
  }

  const increaseitemfromBag = (id, quantity) => e => {
    e.preventDefault()
    quantity++
    dispatch(addToBag(id, quantity))
    toast.success("item quantity increased")
  }

  const removeitemfromBag = (id) => e => {
    e.preventDefault()
    dispatch(removeFromBag(id))
    toast.error("item removed from cart.")

  }

  return (
    <>
      <Navbar />
      <ToastContainer theme='colored' position='top-right' />
      <div style={{backgroundColor:"#dcdcdc"}}>
      <div className='container mx-auto p-5 w-75'>
        <Link className='text-success fs-4 d-flex justify-content-end mb-2' to='/'>Add more items</Link>
        {
          bag_items.length > 0 ?
            <table className='table text-center table-hover table-bordered table-striped shadow'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  bag_items.map((item, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <img src={`${API}/${item.image}`} style={{ height: "50px" }} />
                      </td>
                      <td>{item.name}</td>
                      <td>Rs.{item.price}</td>
                      <td>
                        <div className='btn-group'>
                          <button className='btn btn-outline-warning' onClick={reduceitemfromBag(item.food, item.quantity)}>-</button>
                          <div className='px-3'>{item.quantity}</div>
                          <button className='btn btn-outline-success' onClick={increaseitemfromBag(item.food, item.quantity)}>+</button>
                        </div>
                      </td>
                      <td><button className='btn btn-outline-danger' onClick={removeitemfromBag(item.food)}><i className='bi bi-trash'></i></button></td>
                    </tr>

                  })
                }
                <tr>
                  <td colSpan={6}><Link to='/confirmorder' className='btn btn-warning'>Proceed to Checkout</Link></td>
                </tr>

              </tbody>
            </table>

            :
            <div className='alert alert-danger'>Your Bag is Empty</div>

        }
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Bag