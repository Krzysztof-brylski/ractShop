import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../appContext";
import TagListComponent from "../components/tagListComponent";
import PostThumbnailComponent from "../components/productThumbnailComponent";
import {useParams} from "react-router-dom";
/**
 * home page
 * @returns {*}
 * @constructor
 */
function HomePage() {
    const category=useParams("category");
    const {axiosInstance} = useContext(AppContext);
    const [data,setData]=useState([]);
    //todo implement filters
    useEffect(()=>{
        axiosInstance.get(`/product/?hydrate=1`).then((res)=>{
            setData(res.data.data);
        }).catch((err)=>{

        });
    },[category]);


    return(
        <div className={"px-40 py-7 bg-gray-100 min-w-full min-h-screen flex flex-col items-center"}>
            <TagListComponent/>
            <div className={"bg-white min-w-full my-4"}>
                <div className={"grid grid-cols-4 grid-flow-col gap-4"}>
                    {
                        data !== null && data.map((element)=>{
                            console.log(element);
                            return (<PostThumbnailComponent product={element}/>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default HomePage;