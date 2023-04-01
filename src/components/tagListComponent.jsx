import React, {useState, useEffect, useContext} from "react";
import {AppContext} from '../appContext.jsx'
function TagListComponent() {
    const [tags,setTags]=useState([]);
    const {axiosInstance}=useContext(AppContext);
    useEffect(()=>{
        axiosInstance.get("/product_tags?limit=6").then((res)=>{
            setTags(res.data.data);
        }).catch((err)=>{

        });
    },[]);
    return (
        <div className={"bg-white h-1/5 min-w-full my-4 items-between justify-center"}>
            <h1 className={"text-4xl font-bold m-3"}>Best eShop Ever!</h1>
            <p className={"mt-10 mb-3"}>
                {
                    tags !==null && tags.map((element)=>{
                        return (
                            <a href={"#"}>
                                <span className={"mx-4 my-2 text-xl font-semibold leading-none tracking-tight text-gray-600 p-2 capitalize hover:text-gray-900"}>{element.tag_name}</span>
                            </a>
                        );
                    })
                }
            </p>
        </div>
    );

}
export default TagListComponent;