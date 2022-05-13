import React from 'react'
import './Profile.css'
import Nav from '../../molecules/Nav/Nav'
import Sidebar from '../../organisms/SideBar/Sidebar'

import { useState } from 'react'


const Profile = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div >
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
                                    <div>
                                        <h6>Hồ sơ cá nhân</h6>
                                        <p>Quản lý thông tin cá nhân để đảm bảo độ tin cậy và bảo mật</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-8 has-child-left'>
                                            <div className='row'>

                                                <label className="col-sm-2 col-form-label col-form-label-sm">Tên Đăng Nhập :</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" value={'namvietle1010'} disabled />
                                                </div>
                                            </div>

                                            <div className='row'>

                                                <label className="col-sm-2 col-form-label col-form-label-sm">Tên :</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className='row'>

                                                <label className="col-sm-2 col-form-label col-form-label-sm">Email :</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>

                                            <div className='row'>

                                                <label className="col-sm-2 col-form-label col-form-label-sm">Giới tính :</label>
                                                <div className="col-sm-10">
                                                    <div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" value="option1" />
                                                            <label className="form-check-label">Nam</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" value="option2" />
                                                            <label className="form-check-label">Nữ</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" value="option2" />
                                                            <label className="form-check-label">Khác</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>

                                                <label className="col-sm-2 col-form-label col-form-label-sm">Ngày sinh :</label>
                                                <div className="col-sm-3">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='row'>

                                                    <label className="col-sm-2 col-form-label col-form-label-sm"></label>
                                                    <div className="col-sm-2">
                                                        <button className='btn btn-primary btn-lg'>Lưu</button>
                                                    </div>
                                                </div>

                                            </div>




                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='d-flex justify-content-center avatar'>

                                                {selectedImage ? <img src={selectedImage}></img>
                                                    : <img src='https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg'></img>}




                                                <input
                                                    type="file"

                                                    onChange={(event) => {

                                                        setSelectedImage(event.target.files[0]);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>




        </div >
    )
}

export default Profile