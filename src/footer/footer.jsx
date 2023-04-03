import React from "react";
import {Link} from "react-router-dom";

/**
 * Page footer component
 * @returns {*}
 * @constructor
 */
function Footer() {
    return(
        <footer className={"bg-black p-1"}>
            <Link to={"/"}>
                <h2 className={"text-white"}>©{new Date().getFullYear()} Totaly not fake eShop </h2>
            </Link>
        </footer>

    );
}
export default Footer;