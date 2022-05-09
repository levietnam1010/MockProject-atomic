import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InfoIcon from '@mui/icons-material/Info';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div>
            <div className='side-menu'>
                <div className='top-section'>
                    <div className='d-flex sub-item'> <PersonIcon></PersonIcon> <Link to='/user/account/profile' className='link'>Tài khoản của tôi</Link>

                    </div>
                    <div>
                        <ul className='sub-profile'>
                            <Link className='link' to='/user/account/profile'> <li>Hồ sơ</li></Link>
                            <Link className='link' to='/user/account/payment'> <li>Ngân hàng</li></Link>
                            <Link className='link' to='/user/account/address'><li>Địa chỉ</li></Link>
                            <Link className='link' to='/user/account/password'><li>Mật khẩu</li></Link>

                        </ul>
                    </div>

                    <div className='d-flex sub-item'> <ReceiptLongIcon></ReceiptLongIcon> <Link to='/user/purchase' className='link'>Hóa đơn</Link> </div>
                    <div className='d-flex sub-item'> <CurrencyExchangeIcon></CurrencyExchangeIcon> <Link to='/user/purchase' className='link'>Khuyến mãi</Link> </div>
                    <div className='d-flex sub-item'> <InfoIcon></InfoIcon> <Link to='/user/purchase' className='link'>Giới thiệu</Link> </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar