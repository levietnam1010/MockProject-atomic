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



    const handleDeleteProduct = (product) => {
        dispatch(deleteProductFromCart(product))
    }





    const inputChangedHandler = () => {

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
                                        <td >
                                            <div className="d-flex quantity">

                                                <input className='input-quantity' value={item.quantity} disabled ></input>

                                            </div>
                                        </td>
                                        <td>{item.price * item.quantity}</td>
                                        <td><Button variant='contained' color='error' onClick={() => handleDeleteProduct(item)}>Xóa</Button> <Button variant='contained' color='primary'>Cập nhật</Button>  </td>
                                    </tr>
                                )
                            })}

                            <tr>
                                <th ><Checkbox></Checkbox>Chọn tất cả({cart.length}) </th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th >Tổng Thanh toán({0} sản phẩm) :</th>
                                <th ><Button variant='contained' color='error'>Mua Hàng</Button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cart