import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start my-5" style={footerStyle}>

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem"></i>Trendy
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, beatae quo excepturi delectus illo eum?
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Men</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Women</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Kids</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Others</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Logout</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fa fa-home me-2"></i> Kanpur, India</p>
                                <p>
                                    <i className="fa fa-envelope me-2"></i>
                                    coustmercare@trendy.com
                                </p>
                                <p><i className="fa fa-phone me-2"></i> + 01 234 567 89</p>
                                <p><i className="fa fa-print me-2"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright :
                    <a className="text-reset fw-bold" href="/">Trendy.com</a>
                </div>
            </footer>
        </>
    );
};

const footerStyle = {
    backgroundColor: '#000',
    color: '#fff !important',
};

export default Footer;

