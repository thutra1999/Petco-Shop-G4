import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="contianer-fluide footer">
                <div className="section_service">
                    <div className="container">
                        <div className="row row-noGutter-2">
                            <div className="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div className="service_item">
                                    <span className="icon"><img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_1.png?16"
                                        alt=""></img>
                                    </span>
                                    <div className="content_srv">
                                        <div className="title_service">Giao hàng cực nhanh</div>
                                        <div className="content_service">Miễn phí với đơn hàng trị giá trên 800.000đ</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div className="service_item">
                                    <span className="icon"><img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_2.png?1656547719204"
                                        alt=""></img>
                                    </span>
                                    <div className="content_srv">
                                        <div className="title_service">Mua hàng siêu tiết kiệm</div>
                                        <div className="content_service">Tiết kiệm hơn từ 10% - 30% so với giá thị trường</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div className="service_item">
                                    <span className="icon">
                                        <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_3.png?1656547719204"
                                            alt=""></img>
                                    </span>
                                    <div className="content_srv">
                                        <div className="title_service">Sản phẩm chính hãng 100%</div>
                                        <div className="content_service">Sản phẩm được nhập khẩu chính hãng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-footer mid-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="col-md-12 no-padding">
                                    <h4 className="title-menu title-payment">Chấp nhận thanh toán</h4>
                                    <div className="footer-widget">
                                        <div className="payment">
                                            <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/payment.png?1656547719204"
                                                alt=""></img>
                                        </div>
                                    </div>

                                    <div className="guarantee">
                                    <h4 className="title-menu">CHỨNG NHẬN</h4>
                                    <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/guarantee_img.png?1656547719204"
                                        alt=""></img>
                                </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="widget-ft">
                                    <h4 className="title-menu tittle_time">Hotline liên hệ:</h4>
                                </div>
                                <div className="time_work">
                                    <div className="list-menu">
                                        <div className="list-menu-item-hotline">
                                            <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/icon-telephone.png?1654417427508"
                                                alt=""></img>
                                            <div className="contact">
                                                <a href="tel:0869.125.610" className="phone-number">0869.125.610</a>
                                                <span className="hour">(Tất cả các ngày trong tuần)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="socials-footer">
                                    <h4 className="title-menu">Kết nối với chúng tôi</h4>
                                    <div className="list-socials">
                                        <div className="list-item">
                                            <a href="https://www.facebook.com/" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://www.google.com.vn/?hl=vi" className="google-plus"><i className="fa-brands fa-google-plus-g"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://twitter.com/?lang=vi" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                        </div>
                                        <div className="list-item">
                                            <a href="https://www.instagram.com/" className="insta"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="guarantee">
                                    <h4 className="title-menu">CHỨNG NHẬN</h4>
                                    <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/guarantee_img.png?1656547719204"
                                        alt=""></img>
                                </div> */}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 no-padding">
                                <div className="widget-ft">
                                    <h4 className="title-menu">Hệ thống cửa hàng & liên kết</h4>
                                    <div className="item">
                                        <h4 className="item-title">Petco Shop</h4>
                                        <div className="item-child">242 Kim Mã, Ba Đình, Hà Nội</div>
                                        <div className="item-child">Hotline: 0971.111.242</div>
                                    </div>

                                    <div className="item-connect">
                                        <h4 className="item-title">Petco Shop liên kết</h4>
                                    </div>

                                    <div className="item-address">
                                        <h4 className="item-title">Petco Shop Văn Quán</h4>
                                        <div className="item-child">32BT8 KDT Văn Quán, Hà Đông (cổng trường Tiểu học Ban Mai)</div>
                                        <div className="item-child">Hotline: 0981.111.328</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center">
                        <span className="text">
                            © Bản quyền thuộc về
                            <b> Group 4</b>.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
