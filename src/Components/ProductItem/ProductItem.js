import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import { AddCart } from "../../actions/index";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom'

function ProductItem(props) {
  const [products, setProducts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);

  useEffect(() => {
    setProducts(props.data);
    if (props.data != null) {
      setPage(0);
    }
  }, [props.data]);

  useEffect(() => {
    if (products != null) {
      let itemsPerPage = 9;
      const starOffset = page * itemsPerPage;
      let endOffset = (page + 1) * itemsPerPage;
      if (endOffset > products.length) {
        endOffset = products.length;
      }
      setCurrentItems(products.slice(starOffset, endOffset));
      setPageCount(Math.ceil(products.length / itemsPerPage));
    }
  }, [page, products]);

  const handlePageClick = (event) => {
    setPage(event.selected);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  var list_product = [];
  if (currentItems != null) {
    list_product = currentItems.map((item) => (
      <div className="col-lg-4 col-md-6" key={item.id}>
        <div className="card">
          <div className="img_frame">
            <Link to={"/detail/" + item.id}>
              <img src={item.picture_1} className="card-img-top" alt="..." />
            </Link>
            <ul className="side-icons">
              <span>
                <i
                  className="fa fa-solid fa-shopping-cart"
                  onClick={() => props.AddCart(item)}
                ></i>
              </span>
              <span>
                <i className="fa fa-share"></i>
              </span>
              <span>
                <i className="fa fa-heart"></i>
              </span>
            </ul>
          </div>
          <div className="card-body container text-center">
            <Link to={"/detail/" + item.id}><h5 className="card-title">{item.name}</h5></Link>
            <br />
            <div className="flex">
              <div className="">
                <span className="new_price">
                  {(item.price * (1 - item.discount)).toLocaleString('en-US')} VND
                </span>
              </div>
              <div className="">
                {item.discount > 0 ? (
                  <span className="old-price">{item.price.toLocaleString('en-US')} VND</span>
                ) : <br />}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>

      <div className="row">{list_product}</div>
      <ReactPaginate
         previousLabel="Previous"
         nextLabel="Next"
         pageClassName="page-item"
         pageLinkClassName="page-link"
         previousClassName="page-item"
         previousLinkClassName="page-link"
         nextClassName="page-item"
         nextLinkClassName="page-link"
         breakLabel="..."
         breakClassName="page-item"
         breakLinkClassName="page-link"
         pageCount={pageCount}
         marginPagesDisplayed={2}
         pageRangeDisplayed={5}
         onPageChange={handlePageClick}
         containerClassName="pagination"
         activeClassName="active"
         forcePage={page}
      />

    </>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(null, mapDispatchToProps)(ProductItem);
