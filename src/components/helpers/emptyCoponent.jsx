import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

/**
 * component for displaying empty resource information
 * @param width - (optional) component view [default w-screen]
 * @param height - (optional) component height [default h-screen]
 * @returns {*}
 * @constructor
 */
function EmptyResultComponent({width="h-screen",height="w-screen"}) {
    return (
        <div className={`flex flex-col justify-center items-center ${width} ${height}`}>
            <FontAwesomeIcon icon={faEyeSlash} size={"10x"} className={"p-5"}/>
            <h1 className={"text-xl font-bold p-2 my-2"}>Opps...</h1>
            <h3 className={"text-md font-semibold p-2 my-2"}>No resource found ;/</h3>
            <Link to={"/"} className={"px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-300 hover:text-black"}>Back to home page</Link>
        </div>
    );
}

export default EmptyResultComponent;