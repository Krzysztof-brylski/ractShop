import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../appContext";
import TagListComponent from "../components/tagListComponent";
/**
 * home page
 * @returns {*}
 * @constructor
 */
function HomePage() {

    return(
        <div className={"px-40 py-7 bg-gray-100 min-w-full min-h-screen flex flex-col items-center"}>
            <TagListComponent/>
            <div className={"bg-white min-w-full my-4"}>
                <h2>Home</h2>
            </div>
        </div>


    );
}
export default HomePage;