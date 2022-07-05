import './Home.css';
import img01 from "../img/doghome01.png"
import img02 from "../img/doghome02.png"
import img03 from "../img/dogfoodie.png"
import ProductItem from "../Components/ProductItem/ProductItem";
import Section from "../Components/Section/Section";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);

    useEffect(() => {
        let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);
    
    var products_jsx = [];
    if (currentItems != null) {
        products_jsx = currentItems.map((item) => (
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                        <img 
                            className='card-img-top'
                            src={item.picture}
                            alt="..."
                            />
                        <ul class="featured__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>

        ));
    }

    return <>

        <div class="container-fluid">

            {/* Carousel */}

            <div id="myCarosel" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarosel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarosel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img01} class="d-block w-50" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Welcome to</h2>
                            <h1>Petco Shop</h1>
                            <h5>Selecting only the best Puppies! </h5>
                            <button class="myButton">Shop Now</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img02} class="d-block w-50" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>The best for their well-being</h5>
                            <h5>and find your perfect product today!</h5>
                            <button class="myButton">Shop Now</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarosel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarosel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* End of Carousel */}

            <div class="container">
                {/* New product */}

                {/* End of new product */}

                {/* Best seller */}

                <div className='container-fliud'>
                    <div className='container'>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title">
                                    <h2>Sản phẩm bán chạy</h2>
                                </div>

                            </div>
                        </div>
                        <div class="row featured__filter">
                        {products_jsx}
                        </div>
                    </div>
                </div>
                {/* End of best seller */}

                <div className='container-fliud'>
                    <div className='container'>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title">
                                    <h2>Sản phẩm mới nhất</h2>
                                </div>
                                <div class="featured__controls">
                                    <ul>
                                        <li class="active" data-filter="*">All</li>
                                        <li data-filter=".food">Thức ăn</li>
                                        <li data-filter=".toy">Đồ chơi</li>
                                        <li data-filter=".fashion">Thời trang</li>
                                        <li data-filter=".dog_bread">Giống chó</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row featured__filter">
                            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-4.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                                <div class="featured__item">
                                    <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                                        <img src="https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y"
                                            class="card-img-top" alt="..." />
                                        <ul class="featured__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </>;
};
export default Home;
