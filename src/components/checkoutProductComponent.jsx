import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../appContext";
function CheckoutProductComponent({id,image,name,tag,price,count}) {
        const {popItem,deleteCart} = useContext(AppContext);
        return(
            <div className={"m-2 p-2 flex items-center justify-between"}>
                <img src={`https://api.flotiq.com${image}`} style={{width:"150", height:"150px"}} className={"my-2 p-2"}/>
                <div className={"flex flex-col p-2"}>
                    <h3>{tag}</h3>
                    <h2>{name}</h2>
                </div>
                <div className={"mx-3 p-2"}>
                    <span>Quantity: {count}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <span>${price}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <span>Total: ${parseFloat(price) * parseFloat(count)}</span>
                </div>
                <div className={"mx-3 p-2"}>
                    <FontAwesomeIcon onClick={()=>{popItem(id);}} icon={faXmarkCircle} size={"xl"} className={"text-gray-500 hover:text-gray-900 hover:scale-125"}/>
                </div>
            </div>
        );
}
export default CheckoutProductComponent;