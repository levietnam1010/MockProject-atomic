import React from 'react'
import Nav from '../../molecules/Nav/Nav'
import './Product.css'
import { useState } from 'react'
const Product = () => {


    const [quantity, setQuantity] = useState(1)


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
                                <img className='img-child' src='https://gocphongcach.com/wp-content/uploads/2021/07/unsocial.jpg'></img>
                            </div>
                            <div className='col-sm-4'>
                                <img className='img-child' src='https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-hoodie-local-bad-habits.jpg'></img>
                            </div>
                            <div className='col-sm-4'>
                                <img className='img-child' src='https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-hoodie-local-swe.jpg'></img>
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
                            <h6>Product information</h6>
                            <h4>COMPOUND ZIP HOODIE</h4>
                        </div>

                        <div>
                            <span>$55.00</span>
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
                                <div class="d-flex quantity">
                                    <button className='btn btn-light' onClick={() => setQuantity(quantity - 1)}><i class="fas fa-minus"></i></button>
                                    <input className='input-quantity' value={quantity}></input>
                                    <button className='btn btn-light' onClick={() => setQuantity(quantity + 1)}><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <button className='btn btn-primary button'><i className="fas fa-dollar-sign"></i> BUY NOW</button>
                                <button className='btn btn-outline-warning button'><i className="fas fa-shopping-cart"></i> ADD CART</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='d-flex'>

                        <span>Chia sẻ  :    </span> <img className='icon-share' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDndaBQrMhSlFAIqbLn-5-2iw2qFV55f_TpgitOjbSg&s'></img>
                        <img className='icon-share' src='https://logowik.com/content/uploads/images/294_facebook_messenger.jpg'></img>
                        <img className='icon-share' src='https://inkythuatso.com/uploads/images/2021/09/zalo-logo-inkythuatso-14-15-03-04.jpg'></img>
                        <img className='icon-share' src='https://cdn-icons-png.flaticon.com/512/124/124021.png'></img>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Product