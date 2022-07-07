import './Home.css';
import img03 from "../../img/thankyou.png"
import img04 from "../../img/banner01.png"
import img05 from "../../img/carousel01.jpg"
import img06 from "../../img/carousel02.jpg"
import { Link } from 'react-router-dom';
import Feedback from "../../Components/Feedback/Feedback";

import React, { useEffect, useState } from "react";
import Preloader from '../../Components/Preloader/Preloader';
import ProductItemHome from '../../Components/ProductItem/ProductItemHome';

const Home = () => {
  const [data, setData] = useState([]);
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    setPreloader(true);
    let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data)).then(() => setPreloader(false))

  }, []);


  return <>
    {!preloader ?
      <div class="container-fluide">



        <div id="myCarosel" class="carousel slide d-sm-none d-md-block d-none d-sm-block" data-bs-ride="carousel">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarosel" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarosel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img05} class="d-block w-50" alt="..." />
              
            </div>
            <div class="carousel-item">
              <img src={img06} class="d-block w-50 ms-auto" alt="..." />
              
            </div>
            <div class='carouse-btn'>
                  <Link to="/shop">
                    <button class="myButton">Shop now</button>
                  </Link>
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

        <div class="container-fluide">
          {/* Best seller */}

          <div className='container-fluide'>
            <div className='container'>
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title">
                    <i class="fa fa-thin fa-award fa-3x"></i>
                    <h2>Sản phẩm bán chạy</h2>
                  </div>
                </div>
              </div>
              <div class="row featured__filter">
                <div className="col-lg-12 col-md-7 col-sm-12 product">
                  <div className="row justify">
                    <ProductItemHome data={data}></ProductItemHome>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of best seller */}

          <div className='container-fluide'>
            <img className='banner' src={img04} />
          </div>

          {/* New product */}
          <div className='container-fluide'>
            <div className='container'>
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title">
                    <i class="fa fa-thin fa-star fa-2x"></i>
                    <h2>Sản phẩm mới nhất</h2>
                  </div>
                  {/* <div class="featured__controls">
                  <ul>
                    <li class="active" data-filter="*">All</li> 
                    <li data-filter=".food">Thức ăn</li>
                    <li data-filter=".toy">Đồ chơi</li>
                    <li data-filter=".fashion">Thời trang</li>
                    <li data-filter=".dog_bread">Giống chó</li>
                  </ul>
                </div> */}
                </div>
              </div>
              <div class="row featured__filter">
                <div className="col-lg-12 col-md-7 col-sm-12 product">
                  <div className="row justify">
                    <ProductItemHome data={data}></ProductItemHome>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of new product */}

          <div className='container-fluide'>
            <img className='banner' src={img03} />
          </div>

          {/* Feedback */}

          <div className='container-fluide'>
            <div className='container'>
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title">
                    <i class="fa fa-thin fa-star fa-2x"></i>
                    <i class="fa fa-thin fa-star fa-2x"></i>
                    <i class="fa fa-thin fa-star fa-2x"></i>
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

      : <Preloader />}
  </>;
};
export default Home;
