import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../Components/ProductItem/ProductItem";
import "./Shop.css";
import { Link } from "react-router-dom";
import side from "../../side.jpg";
import Preloader from "../../Components/Preloader/Preloader";
import { Loader } from "../../Components/Loader/Loader";

const Shop = () => {
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState([]);
  const params = useParams();
  const [preloader, setPreloader] = useState(true);
  const [loadItem, setLoadItem] = useState(true);

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
    setLoadItem(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoadItem(false));
  }, [url]);

  useEffect(() => {
    setPreloader(true);
    let url_category = "https://62b421ada36f3a973d2c998f.mockapi.io/category";
    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .then(() => setPreloader(false));
  }, []);

  var category_jsx = [];
  if (categories != null) {
    category_jsx = (
      <ul className="nav navbar-nav">
        {
          (category_jsx = categories.map((item) => (
            <li key={item.id}>
              <Link to={"/shop/" + item.category_name}>
                <span>{item.category_name}</span>
              </Link>
            </li>
          )))
        }
      </ul>
    );
  }

  return (
    <>
      {!preloader ? (
        <div className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 shop_section">
                <div className="sidebar">
                  <div className="sidebar__item">
                    <h4>Danh mục sản phẩm</h4>
                    {category_jsx}
                  </div>

                  <div className="sidebar__item">
                    <img src={side} className="d-sm-none d-md-block"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 product">
                {!loadItem ? (
                  <ProductItem data={data}></ProductItem>
                ) : (
                  <Loader/>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export default Shop;
