import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
const Cart = () => {

    const productList = useSelector((state) => state.cart)
    return (
        <div className='cart-header'>

            <form className='d-flex cart'>

                <div className='cartLink'>
                    <Link to={'/cart'}> <div > <ShoppingCartIcon sx={{ color: 'white', fontSize: '35px' }}></ShoppingCartIcon></div></Link>
                </div>
                <div className='number-cart'>
                    <span className='number'>{productList.length}</span>
                </div>

                <div className='cart-mini'>
                    {productList && productList.length > 0 ? <table className='table'>
                        {productList.map((product, index) => {
                            return (
                                <tr>

                                    <td><img src={product.imageProduct}></img></td>
                                    <td>{product.nameProduct}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })

                        }
                        <tr><td>{productList.length} sản phẩm</td></tr>
                    </table> : <div className='form-cart-mini'><span>Không có sản phẩm nào</span></div>}

                </div>

            </form>

        </div>
    )
}

export default Cart