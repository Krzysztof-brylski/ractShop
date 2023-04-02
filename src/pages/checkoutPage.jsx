import React, {useContext} from "react";
import {AppContext} from "../appContext";
import CheckoutProductComponent from "../components/checkoutProductComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

/**
 * checkout page
 * @returns {*}
 * @constructor
 */
function CheckoutPage() {
    const {checkout,checkoutCount} = useContext(AppContext);
    return(
        <div className={"px-40 py-7 bg-gray-100 min-w-full min-h-screen flex flex-col items-center justify-center"}>
            <div className={"flex min-w-full min-h-1/2 my-4"}>
                <div className={"bg-white w-2/3 p-5 rounded-l-xl flex flex-col"}>
                    <div className={"flex justify-between px-4 py-2"}>
                        <h2 className={"text-left text-xl font-bold"}>Checkout</h2>
                        <span className={"text-md font-semibold"}>{checkoutCount}</span>
                    </div>
                    <div className={"border-t border-gray-400 p-4 max-h-96 overflow-auto"}>
                        {
                            Object.entries(checkout).map((element)=>{
                               return (
                                   <CheckoutProductComponent
                                       id={element[0]}
                                       image={element[1].item.product_images[0].url}
                                       name={element[1].item.product_name}
                                       tag={element[1].item.tag[0].tag_name}
                                       price={element[1].item.product_price}
                                       count={element[1].quantity}

                                   />
                                   );
                            })
                        }

                    </div>
                </div>
                <div className={"bg-gray-300 w-1/3 p-5 rounded-r-xl"}>
                    <h2 className={"text-left text-xl font-bold"}>Summary</h2>
                    <div className={"border-t border-white pt-4 mt-4 flex flex-col"}>
                        <div className={"flex justify-between"}>
                            <span className={"text-left text-md font-semibold"}>ITEMS {checkoutCount}</span>
                            <span className={"size-md font-semibold"}>$2222</span>
                        </div>
                        <div className={"my-2 py-2"}>
                            <h4 className={"text-left text-md font-semibold"}>SHIPPING</h4>
                            <select  className={"py-1 px-2 w-3/4 rounded-md focus:outline-none"}>
                                <option>Standard Delivery $5.00</option>
                                <option>Fast Delivery $15.00</option>
                                <option>Slow Delivery $0.00</option>
                            </select>
                        </div>
                        <div className={"border-b border-white my-2 py-4"}>
                            <h4 className={"text-left text-md font-semibold"}>PROMO CODE</h4>
                            <input className={"py-1 px-2 w-3/4 rounded-md focus:outline-none"} type={"text"} placeholder={"Enter your promo code..."}/>
                        </div>
                        <div  className={"my-1 p-2 flex flex-col"}>
                            <span className={"text-left text-md font-bold"}>TOTAL PRICE $2222</span>
                            <button className={"px-3 py-1 mt-2 bg-black text-white rounded-xl hover:bg-white hover:text-black"}>
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CheckoutPage;