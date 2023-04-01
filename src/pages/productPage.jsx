import React from "react";
import {useParams} from "react-router-dom"

/**
 * display specified product
 * @returns {*}
 * @constructor
 */
function ProductPage() {
    const productId=useParams();

    return(
        <h2>Home</h2>

    );
}
export default HomePage;