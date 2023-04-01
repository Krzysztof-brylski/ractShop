import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../appContext";
/**
 * home page
 * @returns {*}
 * @constructor
 */
function HomePage() {
    const {axiosInstance, checkout, addItem, popItem,deleteCart} = useContext(AppContext);

    return(
        <h2>Home</h2>

    );
}
export default HomePage;