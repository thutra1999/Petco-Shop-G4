import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../Components/ProductItem/ProductItem";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState([]);
  const params = useParams();
  let PageSize = 10;
  let url;
  if (
    params.id === "Thức ăn" ||
    params.id === "Thuốc" ||
    params.id === "Đồ dùng" ||
    params.id === "Quần áo" ||
    params.id === "Khác"
  ) {
    url =
      "https://62b421ada36f3a973d2c998f.mockapi.io/shop?category=" + params.id;
  } else if (params.id != null) {
    url = "https://62b421ada36f3a973d2c998f.mockapi.io/shop?name=" + params.id;
  } else {
    url = "https://62b421ada36f3a973d2c998f.mockapi.io/shop";
  }
   useEffect(() => {
     fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);


  
 useEffect(() => {
    let url_category = "https://62b421ada36f3a973d2c998f.mockapi.io/category";

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);


  var category_jsx = [];
  if (categories != null) {
    category_jsx = (
      <ul className="nav navbar-nav">
        {
          (category_jsx = categories.map((item) => (
            <li>
              <Link to={"/shop/" + item.category_name}>
                <a>{item.category_name}</a>
              </Link>
            </li>
          )))
        }
      </ul>
    );
  }
  
  
  return (
    <>
      <div className="product spad">
        <div className="container">
          <div className="row">
            <div class="col-lg-3 col-md-5 col-sm-12 shop_section">
              <div class="sidebar">
                <div class="sidebar__item">
                  <h4>Danh mục sản phẩm</h4>
                  {category_jsx}
                </div>

                <div class="sidebar__item aside-item filter-price">
                  <h4>Giá sản phẩm</h4>
                  <div class="aside-content filter-group">
                    <div class="filter-price-item">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault">
                          Giá dưới 100.000đ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault1"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault1">
                          100.000đ - 200.000đ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault2"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault2">
                          200.000đ - 300.000đ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault3"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault3">
                          300.000đ - 500.000đ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault4"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault4">
                          500.000đ - 1.000.000đ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault5"
                        ></input>
                        <label class="form-check-label" for="flexCheckDefault5">
                          Giá trên 1.000.000đ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar__item sidebar__item__color--option">
                  <h4>Màu sắc</h4>
                  <div class="sidebar__item__color sidebar__item__color--white">
                    <label for="white">
                      White
                      <input type="radio" id="white"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--gray">
                    <label for="gray">
                      Gray
                      <input type="radio" id="gray"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--red">
                    <label for="red">
                      Red
                      <input type="radio" id="red"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--black">
                    <label for="black">
                      Black
                      <input type="radio" id="black"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--blue">
                    <label for="blue">
                      Blue
                      <input type="radio" id="blue"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__color sidebar__item__color--green">
                    <label for="green">
                      Green
                      <input type="radio" id="green"></input>
                    </label>
                  </div>
                </div>

                <div class="sidebar__item">
                  <h4>Kích thước</h4>
                  <div class="sidebar__item__size">
                    <label for="large">
                      Large
                      <input type="radio" id="large"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="medium">
                      Medium
                      <input type="radio" id="medium"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="small">
                      Small
                      <input type="radio" id="small"></input>
                    </label>
                  </div>
                  <div class="sidebar__item__size">
                    <label for="tiny">
                      Tiny
                      <input type="radio" id="tiny"></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12 product">
           
                <ProductItem data={data}></ProductItem>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
