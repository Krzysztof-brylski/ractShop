import React from "react";
import {useParams} from "react-router-dom"

/**
 * display specified product
 * @returns {*}
 * @constructor
 */
function ProductPage() {
    const productId=useParams("product").product;
    return(
        <h2>{productId}</h2>
    );
}
export default ProductPage;