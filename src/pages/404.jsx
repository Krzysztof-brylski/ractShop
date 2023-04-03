import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceFrown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
/**
 * 404 page
 * @returns {*}
 * @constructor
 */
function NotFound() {
    return(
        <div className={"flex flex-col justify-center items-center h-screen w-screen"}>
            <FontAwesomeIcon icon={faFaceFrown} size={"10x"} className={"p-5"}/>
            <h1 className={"text-2xl font-bold p-2 my-2 text-red-700"}>404</h1>
            <h3 className={"text-md font-semibold p-2 "}>Page not found ;/</h3>
            <Link to={"/"} className={"px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-300 hover:text-black"}>Back to home page</Link>
        </div>
    );
}
export default NotFound;