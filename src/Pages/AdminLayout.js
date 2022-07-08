import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">Admin</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/admin">Quản lý sản phẩm</Link>
              <Link className="nav-link" to="/admin/ordermanager">Quản lý đơn hàng</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;