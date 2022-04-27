
import React from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Category.css'
import { MenuItem, InputLabel, Select, FormControl } from '@mui/material'
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

const Category = (props) => {
    return (
        <>
            <div className="main">
                <Nav></Nav>

            </div>
            <div className='category-div'>
                <div className="row">
                    <div className='col-sm-2'>
                        <div className='term'>
                            <h5>Search Terms</h5>
                        </div>

                        <div className='term'>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>

                        </div>

                        <div className='term' style={{ position: 'relative' }}>
                            <input className='form-control' placeholder='Add search term...'  ></input>
                            <i className="fas fa-search" style={{ position: 'absolute', top: '10%', right: '1%' }}></i>
                            <button className='btn btn-danger' style={{ margin: '15px' }}>Clear all</button>
                        </div>

                        <div className='term'>
                            <h6>Category</h6>
                            <div>
                                <select className="form-select form-select-sm">

                                    <option value="1">Women's</option>
                                    <option value="2">Mens'</option>
                                    <option value="3">Kid</option>
                                </select>
                            </div>
                        </div>
                        <div className='term d-fex'>
                            <div> <h6>Color</h6>
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
                            <button className='btn btn-danger' style={{ margin: '15px' }}>Clear all</button>
                        </div>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className="d-flex justify-content-around top-head">
                                <div> <h6>Results : <span style={{ color: 'red' }}> 127 products</span></h6>  </div>

                                <div> <i className="fas fa-align-justify"></i> <i className="fas fa-th"></i>

                                </div>
                                <div >

                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value=''
                                            label="Age"
                                            onChange=''
                                        >
                                            <MenuItem value={10}>BEST SELLERS</MenuItem>
                                            <MenuItem value={20}>HIGH VOTES</MenuItem>
                                            <MenuItem value={30}>DISCOUNT</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 product border border-primary'>


                                {props.category && products_json.filter(item => item.idCategory === props.category.idCategory).map(product => {
                                    return (
                                        <div className='description' >
                                            <i className="fas fa-heart heart"></i> <i className="far fa-heart display-heart"></i>
                                            <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                            <h6>{product.nameProduct}</h6>
                                            <div className='description-child'>
                                                <h6>  More color : </h6>
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


            </div>
        </>
    )
}

export default Category