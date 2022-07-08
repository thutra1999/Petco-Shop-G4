import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function OrderTable(props) {
  const [orders, setOrders] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setOrders(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...orders];
    if (type == "string") {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == "number") {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setOrders(sortData);
  };


  var order_list = [];
  if (orders != null) {
    order_list = orders.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.useName}</td>
        <td>{item.address}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.cart.length}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        
        <td>
          <Link to={"/admin/orderdetail/" + item.id}>Chi tiết đơn hàng</Link>
        </td>
      </tr>
    ));
  }

  return (
    <table className="table table-bordered table-striped table-hover">
      <thead className="table table-dark">
        <tr>
          <th onClick={() => sortColumn("id", "number")}>Mã đơn hàng</th>
          <th onClick={() => sortColumn("name", "string")}>Tên khách hàng</th>
          <th>Địa chỉ</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Số lượng sản phẩm</th>
          <th>Thời gian đặt hàng</th>
          <th>Trạng thái</th>
          <th><br/></th>
        </tr>
      </thead>
      <tbody>{order_list}</tbody>
    </table>
  );
}

export default OrderTable;
