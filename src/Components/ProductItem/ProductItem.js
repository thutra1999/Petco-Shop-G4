import { useEffect, useState } from "react"
import "./ProductItem.css"
import { AddCart } from '../../actions/index';
import { connect } from 'react-redux';

function ProductItem(props) {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(props.data)
    }, [props.data]);


    var list_product = [];
    if (products != null) {
        list_product = products.map((item) => (
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="img_frame">
                        <img src={item.picture_1}
                            class="card-img-top" alt="..." />
                        <ul class="side-icons">
                            <span><i class="fa fa-solid fa-shopping-cart" onClick={() => props.AddCart(item)}></i></span>
                            <span><i class="fa fa-share"></i></span>
                            <span><i class="fa fa-heart"></i></span>


                        </ul>

                    </div>
                    <div class="card-body container text-center">
                        <h5 class="card-title">{item.name}</h5>
                        <span
                            class="new_price">{item.price * (1 - item.discount)} VND
                        </span>
                        {item.discount > 0 && <span class="old-price">{item.price} VND</span>}

                    </div>
                </div>
            </div>
        ))
    }

    return (
        <>
            {list_product}
        </>
    )
}
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(null, mapDispatchToProps)(ProductItem);