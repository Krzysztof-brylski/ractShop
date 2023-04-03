import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../appContext";
import TagListComponent from "../components/tagListComponent";
import PostThumbnailComponent from "../components/productThumbnailComponent";
import {useParams} from "react-router-dom";
import EmptyResultComponent from "../components/helpers/emptyCoponent";
import LoadingComponent from "../components/helpers/loadingComponent";
/**
 * home page
 * @returns {*}
 * @constructor
 */
function HomePage() {
    const category=useParams("category").category;
    const {axiosInstance} = useContext(AppContext);
    const [data,setData]=useState([]);
    const [loading, setLoading]=useState(true);
    // im not proud of this filtering but it works - _-
    useEffect(()=>{
        var requestUrl='/product/';
        setLoading(true);
        if(category !== undefined){
            let filters={
                "tag[*].dataUrl":{
                    "type":"contains",
                    "filter":`/api/v1/content/product_tags/${category}`
                }
            };
            requestUrl+=`?filters=${JSON.stringify(filters)}&limit=12&hydrate=1`;
        }else{
            requestUrl+='?limit=12&hydrate=1';
        }
        axiosInstance.get(requestUrl).then((res)=>{
            setData(res.data.data);
            setLoading(false);
        }).catch((err)=>{
            console.error(err.response);
        });
    },[category]);

    if(loading){
        return (<LoadingComponent/>);
    }


    if(data.length === 0 && !loading){
        return (<EmptyResultComponent/>);
    }

    return(
        <div className={"px-40 py-7 bg-gray-100 min-w-full min-h-screen flex flex-col items-center"}>
            <TagListComponent/>
            <div className={"bg-white min-w-full my-4"}>
                <div className={"grid grid-cols-4 gap-4 "}>
                    {
                        data !== null && data.map((element)=>{
                            return (<PostThumbnailComponent product={element}/>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default HomePage;