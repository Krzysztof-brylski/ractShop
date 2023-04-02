import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function ProductStarsComponent({stars,size}) {
    const iterator=[1,2,3,4,5];
    return(
        <div className={"flex justify-center"}>
            {
                iterator.map((i)=>{
                    return (<FontAwesomeIcon size={size} icon={faStar} className={ i > Math.floor(stars) ? "text-gray-400":"text-yellow-500"} />);
                })
            }
        </div>
    );
}
export default ProductStarsComponent;