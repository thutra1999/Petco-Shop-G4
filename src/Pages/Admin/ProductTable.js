import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductTable(props) {
  const [products, setProducts] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    console.log('student table useEffect!!');
    setProducts(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...products];
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setProducts(sortData);
  };

  const deleteUser = (id) => {
    fetch('https://62b421ada36f3a973d2c998f.mockapi.io/testShop/' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('delete successful!!');
      let result = [...products];
      result = result.filter((item) => {
        return item.id != id;
      });
      setProducts(result);
    });
  };

  console.log('product table main');
  var product_list = [];
  if (products != null) {
    product_list = products.map((item) => (
      <tr key={item.id} >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <strong>{item.price} VND</strong>
        </td>
        <td>{item.category}</td>
        <td>
          <button
            className={item.status ? 'btn btn-success' : 'btn btn-danger'}
          >
            {item.status ? 'Còn hàng' : 'Hết'}
          </button>
        </td>
        <td>
          <Link to={'/details/' + item.id}>Chi tiết sản phẩm</Link>
        </td>
        <td>
          <Link to={'/productedit/' + item.id}>
            <button type="button" className="btn btn-primary">
              Sửa
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => deleteUser(item.id)}
          >
            <i className="fa fa-trash text-danger" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <table className="table">
      <tr>
        <th onClick={() => sortColumn('id', 'number')}>Mã sản phẩm</th>
        <th onClick={() => sortColumn('name', 'string')}>Tên sản phẩm</th>

        <th onClick={() => sortColumn('price', 'number')}>
          Đơn giá<span> </span>
        </th>
        <th>Phân loại</th>
        <th>Trạng thái</th>
      </tr>
      {product_list}
    </table>
  );
}

export default ProductTable;
