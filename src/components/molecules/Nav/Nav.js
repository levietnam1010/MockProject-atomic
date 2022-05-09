


import React, { useState } from 'react'
import { Routes, NavLink, Link } from 'react-router-dom';
import '../Nav/Nav.css'
import Search from '../SearchForm/Search';
import Cart from '../CartForm/Cart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = () => {

    const [dropdown, setDropdown] = useState(false)
    const handleDropdownMenu = () => {
        setDropdown(!dropdown)
    }
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid">


                    <div className="collapse navbar-collapse text-white">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Thời trang nữ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Thời trang nam</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Liên hệ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">Danh mục</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#" aria-disabled="true">Mua sắm</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto">
                            <li>
                                <h3 style={{ fontFamily: 'Courier New' }}>SHOPPING</h3>
                            </li>
                        </ul>





                        <ul className="navbar-nav">
                            <Search></Search>
                        </ul>
                        <ul className="navbar-nav">
                            <Cart></Cart>
                        </ul>




                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Đăng ký</NavLink>
                            </li>

                            <li className="nav-item has-dropdown">
                                <AccountCircleIcon></AccountCircleIcon>
                                <KeyboardArrowDownIcon onClick={() => handleDropdownMenu()}></KeyboardArrowDownIcon>
                                {dropdown ? <div className="dropdown show">
                                    <div className='d-flex align-items-center'>  <img src='https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg' className='avatar'></img>
                                        <NavLink to='/user/account/profile' className='link'> <h6>Thông tin cá nhân</h6></NavLink> </div>
                                    <div className='sub-form'>
                                        <div className='d-flex'><h6>Chế độ tối : <label class="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label></h6></div>
                                        <Link className='link' to='/login'> <div className='d-flex'><h6>Đăng xuất</h6></div></Link>
                                    </div>
                                </div> : ''}



                            </li>






                        </ul>
                    </div>
                </div >
            </nav >

        </div >
    )


}

export default Nav