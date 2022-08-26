import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom'
import Login from '../../components/Login'
import { delItem } from '../../redux/actions'
import './Cart.css'
import { useUserAuth } from '../../context/UserAuthContext'

import Confirm from '../../components/Modals/Confirm'

const Cart = () => {
    const {  user } = useUserAuth();
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <section id="cart" class="section-p1">
            <table width="100%">
                <tbody>
                    <tr>
                        <td onClick={()=>handleClose(cartItem)}><i class="fa fa-times-circle"></i></td>
                        <td><img  src={cartItem.img} alt={cartItem.title}/></td>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                        <td><input type="number" defaultValue="1"/></td>
                    </tr>
                </tbody>
            </table>
        </section>
        );
    }
    localStorage.setItem("cartItems",JSON.stringify(dispatch))

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row-btn">
                {user ? (
        <NavLink to="/checkout" id='btn' className="normal">Proceed To checkout</NavLink>
      ) : (
        <Confirm/>
  
      )}
                    
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
