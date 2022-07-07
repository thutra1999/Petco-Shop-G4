import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62b421ada36f3a973d2c998f.mockapi.io/testShop/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      {products != null ? (
        <div class="container">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col">
                <strong class="h3">Thông tin sản phẩm </strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Mã sản phẩm</strong>
                        </td>
                        <td class="text-primary">{products.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tên sản phẩm</strong>
                        </td>
                        <td class="text-primary">{products.name}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Đơn giá</strong>
                        </td>
                        <td class="text-primary">{products.price}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Phân loại</strong>
                        </td>
                        <td class="text-primary">{products.category}</td>
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
                        <td class="text-primary">
                          <img
                            src={products.picture_2}
                            className="img-square"
                            width="300px"
                            height="300px"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Trạng thái</strong>
                        </td>
                        <td class="text-primary">{products.status ? "Còn hàng" : "Hết hàng"}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Giảm giá</strong>
                        </td>
                        <td class="text-primary">{products.discount > 0 ? products.discount*100 + ' %' : 'Không có khuyến mại'}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Trọng lượng</strong>
                        </td>
                        <td class="text-primary">{products.weight}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Xuất xứ</strong>
                        </td>
                        <td class="text-primary">{products.origin}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Mô tả</strong>
                        </td>
                        <td class="text-primary">{products.describe}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Công dụng</strong>
                        </td>
                        <td class="text-primary">{products.benefits}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Hướng dẫn sử dụng</strong>
                        </td>
                        <td class="text-primary">{products.guide}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Link to={'/productedit/' + params.id}>
            <button type="button" className="btn btn-primary">
              Chỉnh sửa
            </button>
          </Link>
          <Link to="/admin">
          <button type="button" class="btn btn-secondary">Trở lại</button></Link>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default ProductDetail;
