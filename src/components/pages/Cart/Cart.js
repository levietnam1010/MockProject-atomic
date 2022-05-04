import React, { useState } from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Cart.css'
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../../redux/actions/action'
import Quantity from '../../molecules/Quantity/Quantity';
const Cart = () => {


    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const [quantity, setQuantity] = useState(1)

    const handleChangeQuantity = (quantity) => {
        setQuantity(quantity)
    }
    const handleDeleteProduct = (product) => {
        dispatch(deleteProductFromCart(product))
    }


    return (
        <div>
            <div className="header">
                <Nav></Nav>

            </div>

            <div className='body'>
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th ><Checkbox></Checkbox> </th>
                                <th >Sản Phẩm</th>
                                <th >Đơn Giá</th>
                                <th >Số Lượng</th>
                                <th >Tổng Tiền</th>
                                <th >Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart && cart.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row"><Checkbox></Checkbox></th>
                                        <td> <img src={item.imageProduct}></img> <NavLink to={`/productID=${item.id}`}>{item.nameProduct}</NavLink> </td>
                                        <td>{item.price}</td>
                                        <td><Quantity quantity={handleChangeQuantity}></Quantity> </td>
                                        <td>{item.price * quantity}</td>
                                        <td><Button variant='contained' color='warning' onClick={() => handleDeleteProduct(item)}>Xóa</Button> <Button variant='contained' color='primary'>Cập nhật</Button>  </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cart