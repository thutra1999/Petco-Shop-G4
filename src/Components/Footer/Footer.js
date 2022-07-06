import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <div class="contianer-fluide footer">
                <div class="section_service">
                    <div class="container">
                        <div class="row row-noGutter-2">
                            <div class="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div class="service_item">
                                    <span class="icon"><img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_1.png?16"
                                        alt=""></img>
                                    </span>
                                    <div class="content_srv">
                                        <div class="title_service">Giao hàng cực nhanh</div>
                                        <div class="content_service">Miễn phí với đơn hàng trị giá trên 800.000đ</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div class="service_item">
                                    <span class="icon"><img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_2.png?1656547719204"
                                        alt=""></img>
                                    </span>
                                    <div class="content_srv">
                                        <div class="title_service">Mua hàng siêu tiết kiệm</div>
                                        <div class="content_service">Tiết kiệm hơn từ 10% - 30% so với giá thị trường</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-item-srv col-md-4 col-sm-12 col-xs-12">
                                <div class="service_item">
                                    <span class="icon">
                                        <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/srv_3.png?1656547719204"
                                            alt=""></img>
                                    </span>
                                    <div class="content_srv">
                                        <div class="title_service">Sản phẩm chính hãng 100%</div>
                                        <div class="content_service">Sản phẩm được nhập khẩu chính hãng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="top-footer mid-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="col-md-12 no-padding">
                                    <h4 class="title-menu title-payment">Chấp nhận thanh toán</h4>
                                    <div class="footer-widget">
                                        <div class="payment">
                                            <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/payment.png?1656547719204"
                                                alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="widget-ft">
                                    <h4 class="title-menu tittle_time">Hotline liên hệ:</h4>
                                </div>
                                <div class="time_work">
                                    <div class="list-menu">
                                        <div class="list-menu-item-hotline">
                                            <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/icon-telephone.png?1654417427508"
                                                alt=""></img>
                                            <div class="contact">
                                                <a href="" class="phone-number">0869.125.610</a>
                                                <span class="hour">(Tất cả các ngày trong tuần)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="socials-footer">
                                    <h4 class="title-menu">Kết nối với chúng tôi</h4>
                                    <div class="list-socials">
                                        <div class="list-item">
                                            <a href="" class="facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                        </div>
                                        <div class="list-item">
                                            <a href="" class="google-plus"><i class="fa-brands fa-google-plus-g"></i></a>
                                        </div>
                                        <div class="list-item">
                                            <a href="" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                                        </div>
                                        <div class="list-item">
                                            <a href="" class="insta"><i class="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="guarantee">
                                    <h4 class="title-menu">CHỨNG NHẬN</h4>
                                    <img src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/guarantee_img.png?1656547719204"
                                        alt=""></img>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 no-padding">
                                <div class="widget-ft">
                                    <h4 class="title-menu">Hệ thống cửa hàng & liên kết</h4>
                                    <div class="item">
                                        <h4 class="item-title">Petco Shop</h4>
                                        <div class="item-child">242 Kim Mã, Ba Đình, Hà Nội</div>
                                        <div class="item-child">Hotline: 0971.111.242</div>
                                    </div>

                                    <div class="item-connect">
                                        <h4 class="item-title">Petco Shop liên kết</h4>
                                    </div>

                                    <div class="item-address">
                                        <h4 class="item-title">Petco Shop Văn Quán</h4>
                                        <div class="item-child">32BT8 KDT Văn Quán, Hà Đông (cổng trường Tiểu học Ban Mai)</div>
                                        <div class="item-child">Hotline: 0981.111.328</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center">
                        <span class="text">
                            © Bản quyền thuộc về
                            <b>Petco Shop</b>.
                            GPDKKD số 01A8017619 do UBND quận Ba Đình cấp ngày 19/01/2015.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
