import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux'
import { addAddressUser } from '../../../redux/actions/action'
import { Button } from '@mui/material'
import { useState } from 'react'
const Popupaddress = (props) => {

    const { title, openPopup, setOpenPopup } = props

    const handleClickBack = () => {
        setOpenPopup(false)
    }

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [wards, setWards] = useState()
    const [district, setDistrict] = useState()
    const [province, setProvince] = useState()
    const [addressSpec, setAddressSpec] = useState()

    const dispatch = useDispatch()

    const addressList = useSelector((state) => state.address)



    const handleSubmitAddress = () => {
        const address = { id: addressList.length, name: name, phone: phone, wards: wards, district: district, province: province, addressSpec: addressSpec, defaulAddress: false }
        dispatch(addAddressUser(address))
        setOpenPopup(false)
    }
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div className='d-flex justify-content-between'>
                    <Typography variant='h6' component='div'>{title}</Typography>
                    <CancelIcon sx={{ color: 'red' }} fontSize="large" onClick={() => setOpenPopup(false)} ></CancelIcon>
                </div>
            </DialogTitle>
            <DialogContent>
                <div>
                    <div className='row'>
                        <div className='d-flex'>
                            <input className='form-control' placeholder='Họ và tên' onChange={(e) => setName(e.target.value)}></input>

                            <input className='form-control' placeholder='Số điện thoại' onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className='d-flex'>


                            <input className='form-control' placeholder='Phường' onChange={(e) => setWards(e.target.value)}></input>
                            <input className='form-control' placeholder='Huyện' onChange={(e) => setDistrict(e.target.value)}></input>
                            <input className='form-control' placeholder='Tỉnh' onChange={(e) => setProvince(e.target.value)}></input>
                        </div>
                        <div className='d-flex'>
                            <input className='form-control' placeholder='Địa chỉ cụ thể' onChange={(e) => setAddressSpec(e.target.value)}></input>
                        </div>

                        <div className='d-flex flex-row-reverse'>
                            <Button className='button' variant='contained' color='error' onClick={() => handleSubmitAddress()} >Hoàn thành</Button>


                        </div>


                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Popupaddress