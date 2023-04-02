import React,{useContext} from "react";
import {AppContext} from "../appContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
function PostThumbnailComponent({product}) {
    const {addItem,checkout}=useContext(AppContext);
    const AddToCart=()=>{
        addItem(product);
        console.log(checkout);
    };
    const iterator=[1,2,3,4,5];
    return(
        <div className={"p-5 m-2 flex flex-col "}>
            <Link to={`/product/${product.id}`} className={"flex justify-center"}>
                <img src={`https://api.flotiq.com${product.product_images[0].url}`}  style={{width:"250px",height:"300px"}} className={"border p-1 border-gray-200"}/>
            </Link>
            <h2 className={"mt-1 font-semibold text-xl h-fit"}>{product.product_name}</h2>
            <h5 className={"mb-1 font-normal text-md h-fit capitalize"}>#{product.tag[0].tag_name}</h5>
            <div className={"flex justify-center"}>
                {
                    iterator.map((i)=>{
                        return (<FontAwesomeIcon icon={faStar} className={ i > Math.floor(product.product_score) ? "text-gray-400":"text-yellow-500"} />);
                    })
                }
            </div>

            <span className={"my-2 font-bold text-xl"}>${product.product_price}</span>

            <button className={"px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-300 hover:text-black"} onClick={AddToCart}>
                Add to cart
                <FontAwesomeIcon icon={faCartShopping} className={"text-gray-500 mx-2"}/>
            </button>
        </div>
    );
}
export default PostThumbnailComponent;