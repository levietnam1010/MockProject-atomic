import React from "react";

function Footer(props) {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Company name
                            </h6>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fa fa-home me-3"></i> Đà Nẵng </p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                HVH@fsoft.com.vn
                            </p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                LVN@fsoft.com.vn
                            </p>
                            <p><i className="fa fa-phone me-3"></i> +84 983 999 999</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Mock project: Team 4</a>
            </div>
        </footer>
    );
}

export default Footer;