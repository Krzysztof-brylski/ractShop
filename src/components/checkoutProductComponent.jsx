import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../appContext";
import {useAlert} from "react-alert";

/**
 * component for displaying product in checkout page
 * @param id - product id
 * @param image - product image url
 * @param name - product name
 * @param tag - product tag
 * @param price - product price
 * @param count - product count in order
 * @returns {*}
 * @constructor
 */
function CheckoutProductComponent({id,image,name,tag,price,count}) {
        const {popItem} = useContext(AppContext);
        const alert=useAlert();
        const deleteItem=(id)=>{
            let result = popItem(id);

            if(result.status==="error"){
                alert.error(result.message);
                return;
            }
            alert.success(result.message);
        };


        return(
            <div className={"m-2 p-2 flex items-center justify-between"}>
                <img src={`https://api.flotiq.com${image}`} style={{width:"150", height:"150px"}} className={"my-2 p-2"}/>
                <div className={"flex flex-col p-2"}>
                    <h3 className={"text-md font-semibold"}>{tag}</h3>
                    <h2 className={"text-xl font-bold"}>{name}</h2>
                </div>
                <div className={"mx-3 p-2"}>
                    <span className={"font-semibold"}>Quantity: {count}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <span className={"font-semibold"}>${price}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <span className={"font-semibold"}>Total: ${parseFloat(price) * parseFloat(count)}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <FontAwesomeIcon onClick={()=>{deleteItem(id);}} icon={faXmarkCircle} size={"xl"} className={"text-gray-500 hover:text-gray-900 hover:scale-125"}/>
                </div>
            </div>
        );
}
export default CheckoutProductComponent;