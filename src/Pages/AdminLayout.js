import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/admin">Admin</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" aria-current="page" to="/admin">Quản lý sản phẩm</Link>
              <Link class="nav-link" to="/admin/ordermanager">Quản lý đơn hàng</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;