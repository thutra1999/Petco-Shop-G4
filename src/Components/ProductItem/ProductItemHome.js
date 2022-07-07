import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AddCart } from "../../actions/index";
import { connect } from "react-redux";
import './ProductItemHome.css';

function ProductItemHome(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(props.data)
    }, [props.data])

    var list_product = [];
    var count = 0;
    if (products != null) {
        list_product = products.map((item) => {
            if (count < 6) {
                count++;
                return (
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
                )
            }
        })
    }

    return(
        <>
            <div className="row">{list_product}</div>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      AddCart: (item) => dispatch(AddCart(item)),
    };
  }

export default connect(null, mapDispatchToProps)(ProductItemHome);