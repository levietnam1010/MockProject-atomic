import React, { useState, useEffect } from 'react'
import Nav from '../../molecules/Nav/Nav'
import './CategoryOverview.css'
import axios from "axios";

import { Link } from 'react-router-dom';
const CategoryOverview = (props) => {



    const data = [
        { id: 1, nameCategory: "Thời trang nữ", idCategory: 'cte001', parent_id: '001', imageCategory: 'https://sakurafashion.vn/upload/sanpham/large/5224-ao-so-mi-theu-hinh-logo-soc-1.jpg' },
        { id: 2, nameCategory: "Thời trang nam", idCategory: 'cte002', parent_id: '002', imageCategory: 'https://vn-live-01.slatic.net/p/150e593762ba8bb68e4997ed5426ac2a.jpg' },
        { id: 3, nameCategory: 'Trẻ em', idCategory: 'cte003', parent_id: '003', imageCategory: 'https://danangsale.vn/uploads/images/thoi-trang-tre-em-tai-da-nang(11).jpg' },
        { id: 4, nameCategory: 'Đồng hồ', idCategory: 'cte004', parent_id: '004', imageCategory: 'https://cdn.tgdd.vn/Products/Images/7264/247107/dong-ho-nam-mvw-ms075-01-1.-600x600.jpg' },
        { id: 5, nameCategory: 'Điện thoại', idCategory: 'cte005', parent_id: '005', imageCategory: 'https://hc.com.vn/i/ecommerce/media/GS.006076_FEATURE_70688.jpg' },
        { id: 6, nameCategory: 'Máy tính bảng', idCategory: 'cte006', parent_id: '006', imageCategory: 'https://img.websosanh.vn/v10/users/review/images/rutf9j8dr5f8p/1545982472202_8929913.jpg?compress=85' },
        { id: 7, nameCategory: 'Mỹ phẩm', idCategory: 'cte007', parent_id: '007', imageCategory: 'https://cdn-www.vinid.net/59052b2f-kinh-doanh-my-pham.jpg' },
        { id: 8, nameCategory: 'Thể thao', idCategory: 'cte008', parent_id: '008', imageCategory: 'https://channel.vcmedia.vn/thumb_w/640/prupload/439/2016/06/img20160624210543702.jpg' },
        { id: 9, nameCategory: 'Túi nữ', idCategory: 'cte009', parent_id: '009', imageCategory: 'https://salt.tikicdn.com/ts/tmp/0f/5b/3c/b1d2d81b445f5d66b1dded541a59701c.jpg' },
        { id: 10, nameCategory: 'Sách', idCategory: 'cte010', parent_id: '010', imageCategory: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2021/8/10/photo1628565231227-1628565231358414473256.jpg' },
        { id: 11, nameCategory: 'Thiết bị điện tử', idCategory: 'cte011', parent_id: '011', imageCategory: 'https://tietkiemdiennang.net/wp-content/uploads/2020/08/thiet-bi-dien-tu-la-gi-1-2.jpg' }
    ]


    const products_json = [
        { id: 1, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://projectrunway.com.vn/Uploads/images/th%E1%BB%9Di%20trang%20n%E1%BB%AF%20c%C3%B4ng%20s%E1%BB%9F/thoi-trang-cong-so-nu-cao-cap.jpg' },
        { id: 2, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://danangsale.vn/uploads/images/quan-ao-thoi-trang-nu-tai-da-nang(26).jpg' },
        { id: 3, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte001', imageProduct: 'https://salt.tikicdn.com/cache/w1200/ts/product/c7/4b/80/a7bcd31bde9bb4dac0d6938db01ebde0.jpg' },
        { id: 4, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://cuongstore.vn/uploads/2/X/-/7/R/T4n-a_gu-thoi-trang-nam-2020-toi-gian-cung-duoc-nhieu-quy-ong-lua-chon.jpg' },
        { id: 5, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://360boutique.vn/wp-content/uploads/2018/08/5-xu-huong-thoi-trang-nam-khong-the-bo-lo-trong-nam-nay-hinh-anh-1.jpg' },
        { id: 6, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte002', imageProduct: 'https://file.hstatic.net/1000327709/file/thoi-trang-nam-mua-he-jpg__1__3f88f7a25d834102b589153754c1234f_grande.jpg' },
        { id: 7, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte003', imageProduct: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2019_04_08/mau_nhi_trong_thiet_ke_cua_lionel__photo_by_dai_ngo_team_11.jpg' },
        { id: 8, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte003', imageProduct: 'https://canifa.com/blog/wp-content/uploads/2016/09/thoi-trang-tre-em-650x434.jpeg' },
        { id: 9, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://cdn.tgdd.vn/Products/Images/7264/247107/dong-ho-nam-mvw-ms075-01-1.-600x600.jpg' },
        { id: 10, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://cdn.tgdd.vn/Products/Images/7264/237480/casio-mtp-e321b-1avdf-nam-600x600.jpg' },
        { id: 11, nameProduct: 'abc', price: '200.000vnd', idCategory: 'cte004', imageProduct: 'https://antien.vn/uploads/product/dong-ho-thong-minh-fitbit-versa-2-chinh-hang_1604387316.jpg' },


    ]
    const [quantityProduct, setQuantityProduct] = useState()
    useEffect(() => {
        setQuantityProduct(products_json.length)
    }, []);







    const [category, setCategory] = useState(data)
    const [products, setProducts] = useState(products_json)
    const [current_products, setCurrent_products] = useState(products)
    const [link, setLink] = useState()

    useEffect(() => {
        setQuantityProduct(current_products.length)

    }, [current_products]);
    const handleClickCategory = (idCategory) => {

        let current_products_list = products

        current_products_list = current_products_list.filter(product => product.idCategory === idCategory)

        setCurrent_products(current_products_list)




    }


    return (
        <div>

            <div className='head'>
                <Nav></Nav>


            </div>
            <div className='body'>
                <div className='container-fluid head-contain'>
                    <div className='row'> <h4>CATEGORY</h4> </div>
                    <div className='row'>

                        {category.map(item => {
                            return (
                                <div className='col-sm-2 top-category' key={item.id}>

                                    <img src={item.imageCategory}></img>
                                    <Link to={`/category/cid=${item.id}`} onClick={() => props.handleViewCategory(item)}>  <span className='top-category-child'>{item.nameCategory}</span></Link>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            <div className='body-contain'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <h3>Browse by : </h3>
                        <hr></hr>
                        <ul className='nav flex-column'>
                            <a style={{ textDecoration: 'underline' }} href="#">All Category...</a>
                            <li>--</li>
                            {/* map category o day */}
                            {category.map(item => { return (<li className='nav-item' key={item.id} onClick={() => handleClickCategory(item.idCategory)} >{item.nameCategory}</li>) })}



                        </ul>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>


                            <div className="d-flex bd-highlight mb-3">
                                <div className="me-auto p-2 bd-highlight">
                                    <h3>Home <span style={{ marginLeft: '40px', color: 'gray', fontSize: '25px' }}>{quantityProduct} product</span></h3>
                                </div>
                                <div className="p-3 bd-highlight">
                                    <span style={{ color: 'gray', fontSize: '15px' }}>Sort</span>
                                </div>
                                <div className="p-3 bd-highlight">

                                    <select className="form-select form-select-sm">
                                        <option value="1">Feature</option>
                                        <option value="2">Price</option>
                                        <option value="3">Rated</option>
                                    </select>

                                </div>
                                <div className="p-2 bd-highlight" style={{ fontSize: '30px' }}><i className="fas fa-angle-left"></i> 1/30   <i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>

                        <div className='row item-child'>

                            {current_products.map(item => {
                                return (
                                    <div className='col-sm-3' key={item.id}>
                                        <img src={item.imageProduct}></img>
                                        <div>
                                            <h4>{item.nameProduct}</h4>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}

export default CategoryOverview