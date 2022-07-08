import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddCart } from '../../actions/index';
import { connect } from 'react-redux';
import './Detail.css';
import Preloader from "../../Components/Preloader/Preloader";

function Detail(props) {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        setPreloader(true);
        let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop/' + params.id;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
            }).then(()=> setPreloader(false))
    }, [])


    return (
        <>
            {
                (!preloader) ? (
                    <section className="product-details spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__pic">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={product.picture_1} className="d-block w-100" alt="..."></img>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={product.picture_2} className="d-block w-100" alt="..."></img>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__text">
                                        <h3>{product.name}</h3>
                                        <div className="product__details__rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                        <div className="product__details__new-price">{(product.price * (1 - product.discount)).toLocaleString('en-US')} VNĐ</div>
                                        {product.discount > 0 && <div className="product__details__old-price">{product.price.toLocaleString('en-US')} VNĐ</div>}
                                        <p>{product.describe}</p>
                                        {product.status == true ?  <button className="btn btn-outline-danger" onClick={() => props.AddCart(product)}>Thêm vào giỏ hàng</button>:
                                         <button className="btn btn-outline-secondary">Hết hàng</button>}
                                       
                                        <a href="#" className="heart-icon btn btn-outline-danger"><i className="fas fa-heart"></i></a>
                                        <ul>
                                            <li><b>Xuất sứ</b> <span>{product.origin}</span></li>
                                            <li><b>Trọng lượng</b> <span>{product.weight}</span></li>
                                            <li><b>Share on</b>
                                                <div className="share">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Lợi ích
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="product__details__tab__desc">
                                                        <p>{product.benefits}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Hướng dẫn sử dụng
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="product__details__tab__desc">
                                                        <p>{product.guide}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <Preloader/>
                )
            }
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        AddCart: (item) => dispatch(AddCart(item)),
    };
}

export default connect(null, mapDispatchToProps)(Detail);