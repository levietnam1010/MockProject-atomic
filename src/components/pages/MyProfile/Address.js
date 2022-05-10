import React from 'react'
import Nav from '../../molecules/Nav/Nav'
import Sidebar from '../../organisms/SideBar/Sidebar'

const Address = () => {
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





                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Address