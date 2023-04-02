import React, {createContext, useState} from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const apiKey="846c95c8f2f1506074c95fbdd79a9600";
    const [cookies, setCookie, removeCookie] = useCookies(['best-eshop']);
    const axiosInstance = axios.create({
        baseURL:"https://api.flotiq.com/api/v1/content/",
        headers: {'X-AUTH-TOKEN': apiKey}
    });

    const [checkout,setCheckout]=useState({});
    const [checkoutCount,setCheckoutCount]=useState(0);
    const [price,setPrice]=useState(0);
    useState(()=>{
        if(cookies['checkout'] !== undefined){
            setCheckout(cookies['checkout']['checkout']);
        }
    });

    const addItem=(item)=>{
        setCheckoutCount((prev)=>prev+=1);
        setPrice((prev)=>prev+=item.product_price);
        removeCookie('checkout');
        if(checkout[item.id]){
            checkout[item.id].quantity+=1;
        }else{
            checkout[item.id]={quantity:1,item:item};
        }

        setCookie('checkout',{checkout:checkout},{path:"/",maxAge:(60*60*24)});
        return {status:"success",message:"item added"};
    };

    const popItem=(itemId)=>{
        setCheckoutCount((prev)=>prev-=1);

        removeCookie('checkout');
        if(!checkout[itemId]){
            return {status:"error",message:"this item dont exits"};
        }
        if(checkout[itemId].quantity > 1){
            checkout[itemId].quantity-=1;

        }else{
            delete checkout[itemId];
        }
        setCookie('checkout',{checkout:checkout},{path:"/",maxAge:(60*60*24)});
        return {status:"success",message:"item deleted"};
    };

    const deleteCart=()=>{
        setCheckoutCount(0);
        setCheckout({});
        removeCookie('checkout');
    };

    const context={
        axiosInstance,
        checkout,
        checkoutCount,
        price,
        addItem,
        popItem,
        deleteCart,
    };
    return(
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
