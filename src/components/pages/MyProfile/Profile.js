import React from 'react'
import './Profile.css'
import Nav from '../../molecules/Nav/Nav'
import Sidebar from '../../organisms/SideBar/Sidebar'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div >
            <div className="container-fluid">
                <div className="header">

                    <Nav></Nav>
                </div>
                <div className='container-fluid'>
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
                                            <table className='table table'>
                                                <tr>
                                                    <td>Tên Đăng Nhập :</td>
                                                    <td>namvietle1010</td>
                                                </tr>

                                                <tr>
                                                    <td>Tên :</td>
                                                    <td><input className='form-control'></input> </td>
                                                </tr>
                                                <tr>
                                                    <td>Email :</td>
                                                    <td><input className='form-control'></input> </td>
                                                </tr>
                                                <tr>
                                                    <td>Giới tính :</td>
                                                    <td>
                                                        <div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" value="option1" />
                                                                <label class="form-check-label">Nam</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" value="option2" />
                                                                <label class="form-check-label" for="inlineRadio2">Nữ</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" value="option2" />
                                                                <label class="form-check-label" for="inlineRadio2">Khác</label>
                                                            </div>
                                                        </div>
                                                    </td>




                                                </tr>

                                                <tr>
                                                    <td>Ngày sinh :</td>
                                                    <td> <input type='date'></input> </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-sm-3'>hello</div>
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