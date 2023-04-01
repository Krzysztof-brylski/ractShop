import React from "react";
import {useParams} from "react-router-dom"

/**
 * display contact page
 * @returns {*}
 * @constructor
 */
function ContactPage() {
    const productId=useParams();

    return(
        <h2>Home</h2>

    );
}
export default ContactPage;