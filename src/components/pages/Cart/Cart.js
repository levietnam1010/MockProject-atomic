import React, { useEffect, useState } from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Cart.css'
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../../redux/actions/action'

const Cart = () => {


    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const [selectAll, setSelectAll] = useState(false)
    const [sumProductPay, setSumProductPay] = useState()
    const [totalMoney, setTotalMoney] = useState(0)
    const [selectItem, setSelectItem] = useState([])

    useEffect(() => {
        const tempSelect = []
        cart.map(product => {
            tempSelect.push({ id: product.id, select: false })

        })
        setSelectItem(tempSelect)

    }, [])




    useEffect(() => {
        const sum = selectItem.filter(item =>
            item.select === true
        )

        let total = 0;

        for (let i = 0; i < sum.length; i++) {
            for (let j = 0; j < cart.length; j++) {
                if (sum[i].id == cart[j].id && sum[i].select == true) {
                    total += cart[j].price * cart[j].quantity
                }
            }

        }
        setTotalMoney(total)
        setSumProductPay(sum.length)

    }, [selectItem, cart])




    const handleDeleteProduct = (product) => {
        dispatch(deleteProductFromCart(product))
        const tempSelect = selectItem.filter((item) => item.id !== product.id)
        setSelectItem(tempSelect)
    }


    const handleSelectAllProduct = () => {

        let item = []
        if (selectAll == false) {
            item = selectItem.map(product => product.select == false
                ? (
                    { id: product.id, select: !product.select }
                )
                : { id: product.id, select: product.select }
            )

            setSelectAll(!selectAll)

        } else {
            item = selectItem.map(product => (product.select == true)
                ?
                { id: product.id, select: !product.select }
                :
                { id: product.id, select: product.select }


            )


            setSelectAll(!selectAll)

        }
        setSelectItem(item)

    }

    const handleSelectItem = (product) => {

        const item = selectItem.map((item) => product.id == item.id
            ? (
                { id: item.id, select: !item.select }

            )
            :
            { id: item.id, select: item.select }
        )


        setSelectItem(item)

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
                                <th > </th>
                                <th >Sản Phẩm</th>
                                <th >Đơn Giá</th>
                                <th >Số Lượng</th>
                                <th >Kích thước , Màu sắc </th>
                                <th >Tổng Tiền</th>
                                <th >Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart && cart.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row"><Checkbox checked={selectItem.filter(product => (product.id == item.id)).select} onChange={() => handleSelectItem(item)}></Checkbox></th>
                                        <td> <img src={item.imageProduct}></img> <NavLink to={`/productID=${item.id}`}>{item.nameProduct.slice(0, 15).trim()}{item.nameProduct.length > 15 ? '...' : ''}</NavLink> </td>
                                        <td>{item.price}</td>
                                        <td >
                                            <div className="d-flex quantity">

                                                <input className='input-quantity' value={item.quantity} disabled ></input>

                                            </div>
                                        </td>
                                        <td> {item.activeSize} , {item.activeColor} </td>
                                        <td>{item.price * item.quantity}</td>
                                        <td><Button variant='contained' size='small' className='' color='error' onClick={() => handleDeleteProduct(item)}>Xóa</Button>
                                            <Button variant='contained' size='small' color='primary'>Cập nhật</Button>  </td>
                                    </tr>
                                )
                            })}

                            <tr>
                                <th colSpan={2}><Checkbox checked={selectAll} onChange={() => handleSelectAllProduct()}></Checkbox>{!selectAll ? 'Chọn tất cả' : 'Bỏ chọn tất cả'}({cart.length}) </th>


                                <th></th>

                                <th colSpan={2}>Tổng Thanh toán({sumProductPay} sản phẩm) : {totalMoney} vnđ </th>
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