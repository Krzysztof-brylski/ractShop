import React from "react";
import { Audio } from 'react-loader-spinner'

/**
 * component for displaying loading animation
 * @returns {*}
 * @constructor
 */
function LoadingComponent() {
    return(
        <div className={"flex flex-col justify-center items-center h-screen w-screen"}>
            <Audio
                height="150"
                width="150"
                radius="9"
                color="black"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    );
}
export default LoadingComponent;