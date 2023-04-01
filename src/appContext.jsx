import React, {createContext, useState} from "react";
import axios from "axios";
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const apiKey="846c95c8f2f1506074c95fbdd79a9600";

    const axiosInstance = axios.create({
        baseURL:"https://api.flotiq.com/api/v1/content/",
        headers: {'X-AUTH-TOKEN': apiKey}
    });
    const [checkout,setCheckout]=useState({});

    const addItem=(item)=>{
        if(checkout[item.id]){
            checkout[item.id].quantity+=1;
            return "item added";
        }
        checkout[item.id]={quantity:1,item:item};
        return;
    };

    const popItem=(itemId)=>{
        if(!checkout[itemId]){
            return "this item dont exits";
        }
        if(checkout[itemId].quantity > 1){
            checkout[itemId].quantity-=1;
            return "item deleted";
        }
        delete checkout[itemId];
    };

    const deleteCart=()=>{
      setCheckout({});
    };

    const context={
        axiosInstance,
        checkout,
        addItem,
        popItem,
        deleteCart
    };

    return(
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
