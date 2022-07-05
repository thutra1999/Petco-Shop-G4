import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import { AddCart } from "../../actions/index";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

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
  };

  var list_product = [];
  if (currentItems != null) {
    list_product = currentItems.map((item) => (
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="img_frame">
            <img src={item.picture_1} class="card-img-top" alt="..." />
            <ul class="side-icons">
              <span>
                <i
                  class="fa fa-solid fa-shopping-cart"
                  onClick={() => props.AddCart(item)}
                ></i>
              </span>
              <span>
                <i class="fa fa-share"></i>
              </span>
              <span>
                <i class="fa fa-heart"></i>
              </span>
            </ul>
          </div>
          <div class="card-body container text-center">
            <h5 class="card-title">{item.name}</h5>
            <br/>
            <div class="row">
              <div class="col-12">
                <span class="new_price">
                  {item.price * (1 - item.discount)} VND
                </span>
              </div>
              <div class="col-12">
                {item.discount > 0 ? (
                  <span class="old-price">{item.price} VND</span>
                ) : <br/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
     
      <div class="row">{list_product}</div>
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
