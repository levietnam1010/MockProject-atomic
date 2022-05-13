import { Button } from '@mui/material'
import React, { useState } from 'react'
import Nav from '../../molecules/Nav/Nav'
import Sidebar from '../../organisms/SideBar/Sidebar'
import AddIcon from '@mui/icons-material/Add';
import Popupaddress from '../../molecules/PopupAdddress/Popupaddress'
import { useSelector, useDispatch } from 'react-redux'
import { setDefaultAddress } from '../../../redux/actions/action'
import { Delete } from '@mui/icons-material'
const Address = () => {

    const dispatch = useDispatch()


    const addressList = useSelector((state) => state.address)

    const [openPopup, setOpenPopup] = useState(false)


    const handleSetDefaultAddress = (address) => {
        dispatch(setDefaultAddress(address))
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="header">

                    <Nav></Nav>
                </div>
                <div className='container-fluid main'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='container'>

                                <Sidebar></Sidebar>

                            </div>
                        </div>

                        <div className='col-sm-9'>
                            <div className='container-fluid'>
                                <div className='body'>
                                    <div className='d-flex justify-content-between'>
                                        <h4>Địa chỉ của tôi</h4>
                                        <Button variant='contained' color='error' startIcon={<AddIcon></AddIcon>} onClick={() => setOpenPopup(true)} >Thêm địa chỉ</Button>
                                    </div>
                                    <hr></hr>
                                    {addressList.length > 0 ? addressList && addressList.length > 0 && addressList.map((info) => {
                                        return (
                                            <div className='row' key={info.id}>
                                                <div className='col-sm-7'>
                                                    <div className='row'>
                                                        <label className="col-sm-2 col-form-label col-form-label-sm">Họ và tên</label>
                                                        <label className="col-sm-3 col-form-label col-form-label-sm">{info.name}</label>
                                                        {info.defaulAddress && <label className="col-sm-2 col-form-label col-form-label-sm" style={{ backgroundColor: 'green', color: 'white', fontFamily: 'cursive', borderRadius: '35%', textAlign: 'center' }}>Mặc định</label>}
                                                    </div>
                                                    <div className='row'>
                                                        <label className="col-sm-2 col-form-label col-form-label-sm">Số điện thoại</label>
                                                        <label className="col-sm-5 col-form-label col-form-label-sm">{info.phone}</label>

                                                    </div>
                                                    <div className='row'>
                                                        <label className="col-sm-2 col-form-label col-form-label-sm">Địa chỉ</label>
                                                        <label className="col-sm-5 col-form-label col-form-label-sm">{info.addressSpec} Phường {info.wards} Huyện {info.district} , {info.province}</label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className='row'>
                                                        <Button variant='contained' color='primary' size='small' disabled={info.defaulAddress} onClick={() => handleSetDefaultAddress(info)}>Thiết lập địa chỉ mặc định</Button>
                                                    </div>
                                                    <div className='row'>
                                                        <Button variant='outlined' color='primary' endIcon={<Delete></Delete>} size='small' sx={{ width: '50px' }}>Xóa</Button>
                                                    </div>

                                                </div>
                                                <hr></hr>
                                            </div>
                                        )
                                    }) : <div>Hiện chưa có địa chỉ nào</div>
                                    }






                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Popupaddress
                title="Thêm Địa Chỉ"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >

            </Popupaddress>
        </div>
    )
}

export default Address