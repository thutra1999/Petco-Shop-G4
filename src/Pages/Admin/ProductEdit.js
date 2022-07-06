import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductEdit = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [countries, setCountries] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');

    if (params.id != 'new') {
      let products_url =
        'https://62b421ada36f3a973d2c998f.mockapi.io/testShop/' + params.id;

      console.log(products_url);
      fetch(products_url)
        .then((response) => response.json())
        .then((data) => {
          //change date

          setProducts(data);
        });
    } else {
      let initData = {};
   
      setProducts(initData);
    }
    let countries_url =
      'https://62b0495de460b79df0422035.mockapi.io/countries/';

    fetch(countries_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...products };
    data[name] = value;

    if (name == 'status') {
      data[name] = str2bool(value);
      console.log('status');
      console.log(data[name]);
    }

    console.log(data);
    setProducts(data);
  };

  // const handleChangeHome = (event) => {
  //   //console.log(event);
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   console.log(name);
  //   console.log(value);
  //   let data = { ...product };
  //   data.home[name] = value;

  //   console.log(data);
  //   setProducts(data);
  // };

  const saveUser = () => {
    console.log('save data', products);
    let method = 'POST';
    let id = '';
    if (products.id) {
      method = 'PUT';
      id = products.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products),
    };
    fetch(
      'https://62b421ada36f3a973d2c998f.mockapi.io/testShop/' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate(-1);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };

  return (
    <>
      {products != null ? (
        <div
          class="container bootstrap snippets bootdey "
          style={{ padding: '100px 25px' }}
        >
          <div class="panel-body inf-content">
            <div class="row">
              <strong>Chỉnh sửa thông tin sản phẩm</strong>
              <br />
              <div class="table-responsive">
                <table class="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>STT</strong>
                      </td>
                      <td class="text-primary">{products.id}</td>
                    </tr>
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
                        <input
                          type="text"
                          className="form-control"
                          value={products.category}
                          name="category"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Ảnh minh họa sản phẩm</strong>
                      </td>
                      <td class="text-primary">
                        <img
                          src={products.picture_1}
                          className="img-square"
                          width="300px"
                          height="300px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Giảm giá</strong>
                      </td>

                      <td class="text-primary">
                        <input
                          type="text"
                          className="form-control"
                          value={products.discount}
                          name="discount"
                          onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Xuất xứ</strong>
                      </td>
                      <td>
                        <div className="select-container">
                          {countries != null ? (
                            <select
                              name="origin"
                              value={products.origin}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            >
                              {countries != null
                                ? countries.map((item) => (
                                    <option key={item.id} value={item.country}>
                                      {item.country}
                                    </option>
                                  ))
                                : 'loading'}
                            </select>
                          ) : (
                            ''
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Trọng lượng</strong>
                      </td>
                      <td class="text-primary">
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
                      <td class="text-primary">
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
                      <td class="text-primary">
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
                      <td class="text-primary">
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
                    class="btn btn-primary"
                    onClick={() => saveUser()}
                  >
                    Save
                  </button>
                  <span> </span>
                  <Link to="/admin">
                    <button type="button" class="btn btn-secondary">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default ProductEdit;
