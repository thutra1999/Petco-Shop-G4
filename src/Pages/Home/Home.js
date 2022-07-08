import './Home.css';

import { Link } from 'react-router-dom';
import Feedback from '../../Components/Feedback/Feedback';

import React, { useEffect, useState } from 'react';
import Preloader from '../../Components/Preloader/Preloader';
import ProductItemHome from '../../Components/ProductItem/ProductItemHome';

const Home = () => {
  const [data, setData] = useState([]);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setPreloader(true);
    let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setPreloader(false));
  }, []);

  return (
    <>
      {!preloader ? (
        <div className="container-fluide">
          <div
            id="myCarosel"
            className="carousel slide d-sm-none d-md-block d-none d-sm-block"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarosel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarosel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../../img/carousel01.jpg"
                  className="d-block w-50"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../img/carousel02.jpg"
                  className="d-block w-50 ms-auto"
                  alt="..."
                />
              </div>
              <div className="carouse-btn">
                <Link to="/shop">
                  <button className="myButton">Shop now</button>
                </Link>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarosel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarosel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* End of Carousel */}

          <div className="container-fluide">
            {/* Best seller */}

            <div className="container-fluide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <i className="fa fa-thin fa-award fa-3x"></i>
                      <h2>Sản phẩm bán chạy</h2>
                    </div>
                  </div>
                </div>
                <div className="row featured__filter">
                  <div className="col-lg-12 col-md-7 col-sm-12 product">
                    <div className="row justify">
                      <ProductItemHome data={data}></ProductItemHome>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of best seller */}

            <div className="container-fluide">
              <img className="banner" src="../../img/banner01.png" />
            </div>

            {/* New product */}
            <div className="container-fluide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <i className="fa fa-thin fa-star fa-2x"></i>
                      <h2>Sản phẩm mới nhất</h2>
                    </div>
                    {/* <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">All</li> 
                    <li data-filter=".food">Thức ăn</li>
                    <li data-filter=".toy">Đồ chơi</li>
                    <li data-filter=".fashion">Thời trang</li>
                    <li data-filter=".dog_bread">Giống chó</li>
                  </ul>
                </div> */}
                  </div>
                </div>
                <div className="row featured__filter">
                  <div className="col-lg-12 col-md-7 col-sm-12 product">
                    <div className="row justify">
                      <ProductItemHome data={data}></ProductItemHome>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of new product */}

            <div className="container-fluide">
              <img className="banner" src="../../img/thankyou.png" />
            </div>

            {/* Feedback */}

            <div className="container-fluide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <i className="fa fa-thin fa-star fa-2x"></i>
                      <i className="fa fa-thin fa-star fa-2x"></i>
                      <i className="fa fa-thin fa-star fa-2x"></i>
                      <h2>Đánh giá khách hàng</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Feedback data={data}></Feedback>
                </div>
              </div>
            </div>

            {/* End of feedback */}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export default Home;
