import React from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Product.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../../../redux/actions/action'
import { useParams } from 'react-router-dom'






const Product = (props) => {

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


    const [quantity, setQuantity] = useState(1)
    const [cartBtn, setCartBtn] = useState('ADD TO CART')
    const productList = useSelector((state) => state.cart)

    const inputChangedHandler = (event) => {
    }


    const dispatch = useDispatch()

    const handleCart = (product) => {


        if (cartBtn === 'ADD TO CART') {
            dispatch(addProductToCart(product))
            setCartBtn('REMOVE')
        }
        else {
            dispatch(deleteProductFromCart(product))
            setCartBtn('ADD TO CART')
        }
    }




    const { id } = useParams();
    const productDetail = products_json.filter(item => item.id == id)
    const product = productDetail[0]



    return (

        <>
            <div className="container-fluid">
                <Nav></Nav>


            </div>

            <div className='container'>
                <div className='row'>
                    <h6>Home/Men's/Hoodie</h6>
                </div>

                <div className='row'>
                    <div className='col-sm-7'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <img className='img-child' src={product.imageProduct}></img>
                            </div>
                            <div className='col-sm-4'>
                                <img className='img-child' src={product.imageProduct}></img>
                            </div>
                            <div className='col-sm-4'>
                                <img className='img-child' src={product.imageProduct}></img>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <img className='img' src='https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-hoodie-local-brand-streetgang.jpg'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4' style={{ marginLeft: '50px' }}>
                        <div>
                            <h6 className='text-muted'>Product information</h6>
                            <h4>{product.nameProduct}</h4>
                        </div>

                        <div>
                            <span>{product.price}</span>
                        </div>

                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>

                            <button type="button" className="btn btn-link">Write a review</button> <i className="fas fa-comment"></i>
                        </div>

                        <div className='d-flex'>
                            <img className='img-descri' src='https://product.hstatic.net/1000351433/product/9_5a6b60f6cde04ff1b90f554dd80f222f_master.png'></img>
                            <img className='img-descri' src='https://product.hstatic.net/1000351433/product/1__33__1a9a294dfb1942d6bfd70d04f6767bdf_master.jpg'></img>
                        </div>
                        <hr></hr>

                        <div >
                            <div>
                                <span>SELECT SIZE </span>
                                <a href='#' style={{ float: 'right' }}>Size guide</a>
                            </div>

                            <div className='d-flex'>
                                <div>   <button type="button" className="btn btn-light btn-lg button-size">L</button> </div>
                                <div>  <button type="button" className="btn btn-light btn-lg button-size">M</button></div>
                                <div> <button type="button" className="btn btn-light btn-lg button-size">S</button></div>
                                <div> <button type="button" className="btn btn-light btn-lg button-size">XL</button></div>
                                <div> <button type="button" className="btn btn-light btn-lg button-size">XXL</button></div>
                            </div>
                            <div>
                                <span>COLOR</span>
                                <div className='d-flex'>
                                    <button className='btn btn-light'>Black</button>
                                    <button className='btn btn-light'>Brown</button>
                                </div>
                            </div>

                            <div>
                                <span>Quantity</span>
                                <div className="d-flex quantity">
                                    <button className='btn btn-light' onClick={() => setQuantity(quantity - 1)}><i className="fas fa-minus"></i></button>
                                    <input className='input-quantity' value={quantity} onChange={() => inputChangedHandler()}></input>
                                    <button className='btn btn-light' onClick={() => setQuantity(quantity + 1)}><i className="fas fa-plus"></i></button>
                                </div>
                            </div>


                            <div className='d-flex'>
                                <button className='btn btn-primary button'><i className="fas fa-dollar-sign"></i> BUY NOW</button>
                                <button className='btn btn-outline-warning button' onClick={() => handleCart(product)}><i className="fas fa-shopping-cart"></i>{cartBtn}</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='d-flex'>

                        <span>Chia sẻ  :    </span> <img className='icon-share' alt='facebook' src={require('../../../assets/image/facebook.png')}></img>
                        <img className='icon-share' alt='messenger' src={require('../../../assets/image/messenger.jpg')}></img>
                        <img className='icon-share' alt='zalo' src={require('../../../assets/image/zalo.jpg')}></img>
                        <img className='icon-share' alt='twitter' src={require('../../../assets/image/twitter.png')}></img>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Product