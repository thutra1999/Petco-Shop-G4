import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductTable(props) {
  const [products, setProducts] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setProducts(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...products];
    if (type == "string") {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == "number") {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setProducts(sortData);
  };

  const deleteUser = (id) => {
    fetch("https://62b421ada36f3a973d2c998f.mockapi.io/testShop/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("delete successful!!");
      let result = [...products];
      result = result.filter((item) => {
        return item.id != id;
      });
      setProducts(result);
    });
  };

  console.log("product table main");
  var product_list = [];
  if (products != null) {
    product_list = products.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <strong>{item.price} VND</strong>
        </td>
        <td>{item.category}</td>
        <td className={item.status ? "bg-success" : "bg-danger"}>
          <div class="text-light text-center">
            {item.status ? "Còn hàng" : "Hết"}
          </div>
        </td>
        <td>
          <Link to={"/admin/productdetail/" + item.id}>Chi tiết sản phẩm</Link>
        </td>
        <td>
          <Link to={"/admin/productedit/" + item.id}>
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
    <table className="table table-bordered table-striped table-hover">
      <thead className="table table-dark">
        <tr>
          <th onClick={() => sortColumn("id", "number")}>Mã sản phẩm</th>
          <th onClick={() => sortColumn("name", "string")}>Tên sản phẩm</th>

          <th onClick={() => sortColumn("price", "number")}>
            Đơn giá<span> </span>
          </th>
          <th class="nav-item dropdown">
            <a
              class="text-light dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Phân loại
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="text-light " onClick={() => props.filter('')}>Tất cả</a>
              </li>
              <li>
                <a class="text-light " onClick={() => props.filter('Thức ăn')}>Thức ăn</a>
              </li>
              <li>
                <a class="text-light" onClick={() => props.filter('Thuốc')}>Thuốc</a>
              </li>
              <li>
                <a class="text-light" onClick={() => props.filter('Đồ dùng')}>Đồ dùng</a>
              </li>
              <li>
                <a class="text-light" onClick={() => props.filter('Quần áo')}>Quần áo</a>
              </li>
              <li>
                <a class="text-light"onClick={() => props.filter('Khác')}>Khác</a>
              </li>
            </ul>
          </th>
          <th>Trạng thái</th>
          <th colSpan={2}>
            <br />
          </th>
        </tr>
      </thead>
      <tbody>{product_list}</tbody>
    </table>
  );
}

export default ProductTable;
