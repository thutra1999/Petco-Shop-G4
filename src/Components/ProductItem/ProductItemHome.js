import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AddCart } from "../../actions/index";
import { connect } from "react-redux";
import './ProductItem.css';

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
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="img_frame">
                                <Link to={"/detail/" + item.id}>
                                    <img src={item.picture_1} class="card-img-top" alt="..." />
                                </Link>
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
                                <Link to={"/detail/" + item.id}><h5 class="card-title">{item.name}</h5></Link>
                                <br />
                                <div class="row">
                                    <div class="col-12">
                                        <span class="new_price">
                                            {(item.price * (1 - item.discount)).toLocaleString('en-US')} VND
                                        </span>
                                    </div>
                                    <div class="col-12">
                                        {item.discount > 0 ? (
                                            <span class="old-price">{item.price.toLocaleString('en-US')} VND</span>
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
            <div class="row">{list_product}</div>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      AddCart: (item) => dispatch(AddCart(item)),
    };
  }

export default connect(null, mapDispatchToProps)(ProductItemHome);