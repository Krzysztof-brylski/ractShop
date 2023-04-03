import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import ProductStarsComponent from "../components/productStarsComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../appContext";
import {useAlert} from "react-alert";
import LoadingComponent from "../components/helpers/loadingComponent";
import EmptyResultComponent from "../components/helpers/emptyCoponent";

/**
 * specified product page
 * @returns {*}
 * @constructor
 */
function ProductPage() {
    const productId=useParams("product").product;
    const [data,setData]=useState(null);
    const {axiosInstance} = useContext(AppContext);
    const {addItem,checkout}=useContext(AppContext);
    const [loading, setLoading]=useState(true);
    const alert=useAlert();
    useEffect(()=>{
        setLoading(true);
        axiosInstance.get(`/product/${productId}?hydrate=1`).then((res)=>{
            setData(res.data);
            setLoading(false);
        }).catch((err)=>{

        })
    },[productId]);

    if(loading){
        return (<LoadingComponent/>);
    }

    if(data === null && !loading){
        return (<EmptyResultComponent/>);
    }


    const AddToCart=()=>{
        let res = addItem(data);
        alert.success(res.message);
    };
    return(
        <div className={"p-5 flex justify-between my-8"}>
            <div className={"flex flex-col justify-center items-center w-2/5"}>
                <img src={`https://api.flotiq.com${data.product_images[0].url}`} style={{width:"350px",height:"450px"}}/>
                <h2 className={"mt-1 font-bold text-3xl h-fit"}>{data.product_name}</h2>
                <h3 className={"my-3 font-semibold text-xl h-fit"}>#{data.tag[0].tag_name}</h3>
                <ProductStarsComponent stars={data.product_score} size={"3x"}/>

            </div>
            <div className={"flex flex-col justify-center items-begin w-3/5"}>
                <h2 className={"text-left font-bold text-3xl h-fit"}>Product description:</h2>
                <p className={"text-left capitalize py-4 my-7"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis efficitur velit quis eleifend. Maecenas vel velit accumsan, consequat nisl eu, efficitur ligula. Proin varius magna a augue lobortis scelerisque. Aliquam erat volutpat. Vestibulum pellentesque facilisis eros, a lacinia felis dictum feugiat. Nulla ac quam at lorem dictum suscipit a quis libero. Donec bibendum purus sem, nec gravida ipsum ultricies nec. Duis eleifend quis sem et aliquam. In hac habitasse platea dictumst. Quisque et consectetur dolor. Nam pretium vel nisl sit amet lacinia. Nullam auctor metus turpis, sed feugiat ipsum tristique nec. Donec a pretium sapien, a posuere quam.
                </p>
                <button onClick={AddToCart} className={"px-7 py-3 w-fit bg-black text-white rounded-xl hover:bg-gray-300 hover:text-black"}>
                    Add to cart $1000
                    <FontAwesomeIcon icon={faCartShopping} className={"text-gray-500 mx-2"}/>
                </button>
            </div>

        </div>

    );
}
export default ProductPage;