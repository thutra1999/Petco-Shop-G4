import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';

function Admin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); //setStudents(data)
      });
  }, [searchTerm]);

  return (
    <div className="container">
      <h2>Danh sách sinh viên</h2>
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
              <button
                className="btn btn-secondary"
                type="button"
                // onClick={searchStudent}
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <p>
            <Link to={'/productedit/new'}>
              <button
                className="btn btn-primary"
                type="button"
                // onClick={searchStudent}
              >
                Thêm mới sản phẩm
              </button>
            </Link>
          </p>
        </div>
      </div>
      <ProductTable data={products} />
    </div>
  );
}

export default Admin;
