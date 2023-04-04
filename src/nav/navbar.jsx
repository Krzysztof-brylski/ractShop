import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons'

/**
 * page navbar component
 * @returns {*}
 * @constructor
 */
function Navbar() {
    return(
        <nav className={"min-w-full p-2 flex justify-center bg-black"}>
            <div className={"flex"}>
                <Link to={"/"} className={"text-white mx-4 hover:text-gray-300"}>Home</Link>
                <Link to={"/checkout"} className={"text-white mx-4 hover:text-gray-300"}>Checkout</Link>
                <Link to={"/login"} className={"text-white mx-4 hover:text-gray-300"}>Login</Link>
                <a href={"#"} className={"mx-5"}>
                    <FontAwesomeIcon icon={faFacebookF} size={"md"} className={"text-white hover:text-gray-300"} />
                </a>
                <a href={"#"} className={"mx-2"}>
                    <FontAwesomeIcon icon={faInstagram} size={"md"} className={"text-white hover:text-gray-300"} />
                </a>
            </div>
        </nav>
    );
}
export default Navbar;