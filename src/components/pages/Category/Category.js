
import React, { useEffect, useState } from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Category.css'
import { MenuItem, InputLabel, Select, FormControl } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../../molecules/Footer/Footer'
const products_json = [
    { id: 1, nameProduct: 'Áo thun tay lỡ Unisex Yinxx', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://projectrunway.com.vn/Uploads/images/th%E1%BB%9Di%20trang%20n%E1%BB%AF%20c%C3%B4ng%20s%E1%BB%9F/thoi-trang-cong-so-nu-cao-cap.jpg' },
    { id: 2, nameProduct: 'Áo thun tay lỡ Unisex Yinxx', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://danangsale.vn/uploads/images/quan-ao-thoi-trang-nu-tai-da-nang(26).jpg' },
    { id: 3, nameProduct: 'Áo thun tay lỡ Unisex Yinxx', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://salt.tikicdn.com/cache/w1200/ts/product/c7/4b/80/a7bcd31bde9bb4dac0d6938db01ebde0.jpg' },
    { id: 4, nameProduct: 'Áo giữ nhiệt nam dài tay có cổ cao', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://cuongstore.vn/uploads/2/X/-/7/R/T4n-a_gu-thoi-trang-nam-2020-toi-gian-cung-duoc-nhieu-quy-ong-lua-chon.jpg' },
    { id: 5, nameProduct: 'Áo giữ nhiệt nam dài tay có cổ cao', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://360boutique.vn/wp-content/uploads/2018/08/5-xu-huong-thoi-trang-nam-khong-the-bo-lo-trong-nam-nay-hinh-anh-1.jpg' },
    { id: 6, nameProduct: 'Áo giữ nhiệt nam dài tay có cổ cao', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://file.hstatic.net/1000327709/file/thoi-trang-nam-mua-he-jpg__1__3f88f7a25d834102b589153754c1234f_grande.jpg' },
    { id: 7, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte003', imageProduct: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2019_04_08/mau_nhi_trong_thiet_ke_cua_lionel__photo_by_dai_ngo_team_11.jpg' },
    { id: 8, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte003', imageProduct: 'https://canifa.com/blog/wp-content/uploads/2016/09/thoi-trang-tre-em-650x434.jpeg' },
    { id: 9, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://cdn.tgdd.vn/Products/Images/7264/247107/dong-ho-nam-mvw-ms075-01-1.-600x600.jpg' },
    { id: 10, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://cdn.tgdd.vn/Products/Images/7264/237480/casio-mtp-e321b-1avdf-nam-600x600.jpg' },
    { id: 11, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://antien.vn/uploads/product/dong-ho-thong-minh-fitbit-versa-2-chinh-hang_1604387316.jpg' },


]



const Category = (props) => {
    let { id } = useParams();


    let productsList = products_json.filter(product => product.idCategory == id);

    const [searchTerms, setSearchTerm] = useState([])
    const [term, setTerm] = useState("")
    const [heart, setHeart] = useState(false)
    const [hideHeart, setHideHeart] = useState(true)




    const handleAddSearchTerm = (e) => {
        if (e.keyCode === 13) {
            let term = { id: searchTerms.length, term: e.target.value }
            setSearchTerm(
                [...searchTerms, term]
            )
            setTerm("")
        }

    }

    const handleDeleteTerm = (term) => {
        setSearchTerm(
            searchTerms.filter(item => item.id !== term.id)
        )
    }




    const handleDisplayHeart = () => {

        setHideHeart(!hideHeart)
        setHeart(!heart)
    }

    const handleHideHeart = () => {

        setHideHeart(!hideHeart)
        setHeart(!heart)
    }

    return (
        <>
            <div className="header">
                <Nav></Nav>

            </div>
            <div className='category-div'>
                <div className="row">
                    <div className='col-sm-2'>
                        <div className='term'>
                            <h5>Từ khóa tìm kiếm</h5>
                        </div>

                        <div className='term'>

                            {searchTerms.map((item) => {
                                return (
                                    <button className='btn btn-light btn-sm' key={item.id} >{item.term}     <i className="fas fa-times" onClick={() => handleDeleteTerm(item)}></i></button>
                                )
                            })}


                        </div>

                        <div className='term' >
                            <input className='form-control' placeholder='Thêm từ khóa...' value={term} onChange={(e) => setTerm(e.target.value)}
                                onKeyDown={(e) => handleAddSearchTerm(e)}></input>
                            <i className="fas fa-search icon-search" ></i>

                            <button className='btn btn-danger' style={{ margin: '15px' }} onClick={(e) => setSearchTerm([])}>Xóa</button>

                        </div>

                        <div className='term'>
                            <h6>Theo danh mục</h6>
                            <div>
                                <select className="form-select form-select-sm">

                                    <option value="1">Women's</option>
                                    <option value="2">Mens'</option>
                                    <option value="3">Kid</option>
                                </select>
                            </div>
                        </div>
                        <div className='term d-fex'>
                            <div> <h6>Khoảng giá</h6>
                                <div className='box red'></div>
                                <div className='box green'></div>
                                <div className='box blue'></div>
                                <div className='box grey'></div>
                                <div className='box white'></div>

                                <div className='box yellow'></div>
                                <div className='box black'></div>
                                <div className='box AliceBlue'></div>
                                <div className='box Aqua'></div>
                            </div>
                            <button className='btn btn-danger' style={{ margin: '15px' }}>Xóa</button>
                        </div>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className="d-flex justify-content-around top-head">
                                <div> <h6>Kết quả : <span style={{ color: 'red' }}> {productsList.length} sản phẩm</span></h6>  </div>

                                <div> <i className="fas fa-align-justify"></i> <i className="fas fa-th"></i>

                                </div>
                                <div >



                                </div>
                            </div>
                        </div>
                        <div className='row'>



                            {productsList.map(product => {
                                return (
                                    <div className='description col-sm-3 product' key={product.id} >

                                        <i className={'fas fa-heart heart'} hidden={heart} onClick={() => handleDisplayHeart()}></i>
                                        <i className={'fas fa-heart hide-heart'} hidden={hideHeart} onClick={() => handleHideHeart()}></i>
                                        <Link to={`/productID=${product.id}`}>     <img alt={product.nameProduct} src={product.imageProduct}></img>
                                            <h6>{product.nameProduct}</h6></Link>


                                        <div className='description-child'>
                                            <h6>  Màu khác : </h6>
                                            <div className='box yellow'></div>
                                            <div className='box black'></div>
                                        </div>
                                        <div className='description-child'> <h6>{product.price} </h6> </div>
                                    </div>
                                )
                            })}




                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Category