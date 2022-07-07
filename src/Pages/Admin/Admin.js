import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";

function Admin() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(true);
  const [filter, setFilter] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false)
  

 

  useEffect(() => {
    setLoading(false)
    let url = "https://62b421ada36f3a973d2c998f.mockapi.io/testShop";
    if (searchTerm.length > 0) {
      url = url + "?search=" + searchTerm;
    }
    if (filter.length > 0) {
      url = url + "?category=" + filter;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      }).then(()=> setLoading(true));
  }, [searchTerm, filter]);

  useEffect(() => {
    setLoading(false)
    let url_oder = "https://62b04ad2e460b79df0424941.mockapi.io/id/";
    if (searchTerm.length > 0) {
      url_oder = url_oder + "?phone=" + searchTerm;
    }

    fetch(url_oder)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      }).then(()=> setLoading(true));
  }, [searchTerm]);

 
  const categoryFilterHandler = (props) => {
    setFilter(props);
  };

  return (
    <>
    
      <button
        onClick={() => {
          setPage(true);
          setSearchTerm("");
        }}
      >
        Quản lý sản phẩm
      </button>
      <button
        onClick={() => {
          setPage(false);
          setSearchTerm("");
        }}
      >
        Quản lý đơn hàng
      </button>
      {page ? (
       
        <div className="container">
          <h2>Danh sách sản phẩm</h2>
          <div class="row">
            <div class="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <p>
                <Link to={"/admin/productedit/new"}>
                  <button className="btn btn-primary" type="button">
                    Thêm mới sản phẩm
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <ProductTable data={products} filter={categoryFilterHandler} />
        </div>
     ) : (
        <div className="container">
          <h2>Danh sách đơn hàng</h2>
          <div class="row">
            <div class="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <OrderTable data={orders}  />
          </div>
        </div>
      )}
      
    </>
  );
}

export default Admin;
