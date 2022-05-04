import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
const Cart = () => {

    const productList = useSelector((state) => state.cart)
    return (
        <div>

            <form className='d-flex cart'>


                <Link to={'/cart'}> <div > <ShoppingCartIcon sx={{ color: 'red', fontSize: '35px' }}></ShoppingCartIcon></div></Link>
                <div className='number-cart'>
                    <span className='number'>{productList.length}</span>
                </div>

            </form>

        </div>
    )
}

export default Cart