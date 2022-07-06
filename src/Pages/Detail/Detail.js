import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddCart } from '../../actions/index';
import { connect } from 'react-redux';
import './Detail.css';

function Detail(props) {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop/' + params.id;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])


    return (
        <>
            {
                (product != null) ? (
                    <section class="product-details spad">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__pic">
                                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src={product.picture_1} class="d-block w-100" alt="..."></img>
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={product.picture_2} class="d-block w-100" alt="..."></img>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__text">
                                        <h3>{product.name}</h3>
                                        <div class="product__details__rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </div>
                                        <div class="product__details__price">{product.price.toLocaleString('en-US')} VNĐ</div>
                                        <p>{product.describe}</p>
                                        <button class="btn btn-outline-danger" onClick={() => props.AddCart(product)}>Thêm vào giỏ hàng</button>
                                        <a href="#" class="heart-icon btn btn-outline-secondary"><i class="fas fa-heart"></i></a>
                                        <ul>
                                            <li><b>Origin</b> <span>{product.origin}</span></li>
                                            <li><b>Weight</b> <span>{product.weight}</span></li>
                                            <li><b>Share on</b>
                                                <div class="share">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Benefits
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <div class="product__details__tab__desc">
                                                        <p>{product.benefits}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Guide
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <div class="product__details__tab__desc">
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
                    <div className="loader"></div>
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