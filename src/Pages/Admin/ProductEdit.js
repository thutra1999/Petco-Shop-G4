import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";

const ProductEdit = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [categories, setcategories] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {

    if (params.id != "new") {
      let products_url =
        "https://62b421ada36f3a973d2c998f.mockapi.io/shop/" + params.id;

      fetch(products_url)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    } else {
      let initData = {};

      setProducts(initData);
    }
    let categories_url =
      "https://62b421ada36f3a973d2c998f.mockapi.io/category/";

    fetch(categories_url)
      .then((response) => response.json())
      .then((data) => {
        setcategories(data);
      });
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let data = { ...products };
    data[name] = value;

    if (name == "status") {
      data[name] = str2bool(value);
    }

    setProducts(data);
  };

  const saveUser = () => {
    let method = "POST";
    let id = "";
    if (products.id) {
      method = "PUT";
      id = products.id;
    }

    const requestOptions = {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products),
    };
    fetch(
      "https://62b421ada36f3a973d2c998f.mockapi.io/shop/" + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate(-1);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  var discountList = [];
  for (let i = 0; i <= 0.9; i += 0.05) {
    discountList.push(
      <option key={i} value={i.toFixed(2)}>
        {(i * 100).toFixed() + " %"}
      </option>
    );
  }

  return (
    <>
      {products != null ? (
        <div
          className="container bootstrap snippets bootdey "
          style={{ padding: "100px 25px" }}
        >
          <div className="panel-body inf-content">
            <div className="row">
              <strong className="h3">{products.id ? "Chỉnh sửa thông tin" : "Thêm mới"} sản phẩm</strong>
              <br />
              <div className="table-responsive">
                <table className="table table-user-information">
                  <tbody>
                    {products.id ? <tr>
                      <td>
                        <strong>Mã sản phẩm</strong>
                      </td>
                      <td className="text-primary">{products.id}</td>
                    </tr> : ''}
                    
                    <tr>
                      <td>
                        <strong>Tên sản phẩm</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={products.name}
                          name="name"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Đơn giá</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={products.price}
                          name="price"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Loại sản phẩm</strong>
                      </td>
                      <td>
                        <div className="select-container">
                          {categories != null ? (
                            <select
                              name="category"
                              value={products.category}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            >
                              {categories != null
                                ? categories.map((item) => (
                                    <option
                                      key={item.id}
                                      value={item.category_name}
                                    >
                                      {item.category_name}
                                    </option>
                                  ))
                                : "loading"}
                            </select>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Ảnh minh họa sản phẩm</strong>
                      </td>
                      <td className="text-primary">
                        <input type="url"
                          className="form-control"
                          value={products.picture_1}
                          name="picture_1"
                          onChange={(e) => handleChange(e)}/>
                          <input type="url"
                          className="form-control"
                          value={products.picture_2}
                          name="picture_2"
                          onChange={(e) => handleChange(e)}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Giảm giá</strong>
                      </td>

                      <td>
                        <div className="select-container">
                          <select
                            name="discount"
                            value={products.discount}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            {discountList}
                          </select>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Xuất xứ</strong>
                      </td>
                      <td>
                        <div className="select-container">
                          <select
                            name="origin"
                            value={products.origin}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option key={1} value="Mỹ (US)">
                              Mỹ (US)
                            </option>
                            <option key={2} value="Pháp (France)">
                            Pháp (France)
                            </option>
                            <option key={3} value="Trung Quốc">
                            Trung Quốc (China)
                            </option>
                            <option key={4} value="Nhật Bản (Japan)">
                            Nhật Bản (Japan)
                            </option>
                            <option key={5} value="Thái Lan (Thailand)">
                            Thái Lan (Thailand)
                            </option>
                            <option key={6} value="Anh (UK)">
                            Anh (UK)
                            </option>
                            <option key={7} value="Hàn Quốc (Korea)">
                            Hàn Quốc (Korea)
                            </option>
                            <option key={8} value="Đài Loan (Taiwan)">
                            Đài Loan (Taiwan)
                            </option>
                            <option key={9} value="Việt Nam">
                            Việt Nam
                            </option>
                            <option key={10} value="New Zealand">
                            New Zealand
                            </option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Trọng lượng</strong>
                      </td>
                      <td className="text-primary">
                        <input
                          type="text"
                          className="form-control"
                          value={products.weight}
                          name="weight"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Mô tả</strong>
                      </td>
                      <td className="text-primary">
                        <input
                          type="text"
                          className="form-control"
                          value={products.describe}
                          name="describe"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Công dụng</strong>
                      </td>
                      <td className="text-primary">
                        <input
                          type="text"
                          className="form-control"
                          value={products.benefits}
                          name="benefits"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Hướng dẫn sử dụng</strong>
                      </td>
                      <td className="text-primary">
                        <input
                          type="text"
                          className="form-control"
                          value={products.guide}
                          name="guide"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Trạng thái</strong>
                      </td>
                      <td>
                        <div>
                          <input
                            type="radio"
                            value="false"
                            checked={products.status == false}
                            name="status"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          Hết hàng
                          <input
                            type="radio"
                            value="true"
                            checked={products.status == true}
                            name="status"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          Còn hàng
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => saveUser()}
                  >
                    Save
                  </button>
                  <span> </span>
                  <Link to="/admin">
                    <button type="button" className="btn btn-secondary">
                      Trở lại
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default ProductEdit;
