import React, {createContext, useState} from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
export const AppContext = createContext();
/**
 *
 * App context
 * there is handled checkout functional
 * (adding product, deleting product, saving/creating checkoutObj into/from cookie),
 * axios instance have configured base URL, and flotiq readonly api hey
 * @param children
 * @returns {*}
 * @constructor
 */
export default function AppContextProvider({children}){

    const apiKey="846c95c8f2f1506074c95fbdd79a9600";
    const [cookies, setCookie, removeCookie] = useCookies(['best-eshop']);

    const axiosInstance = axios.create({
        baseURL:"https://api.flotiq.com/api/v1/content/",
        headers: {'X-AUTH-TOKEN': apiKey}
    });

    const [checkout,setCheckout]=useState({items:{},count:0,total:0});
    const [xdRerender,setXdRerender]=useState(1);
    useState(()=>{
        if(cookies['checkout'] !== undefined){
            setCheckout(cookies['checkout']['checkout']);
        }
    });

    const addItem=(item)=>{
        checkout.total+=item.product_price;
        checkout.count+=1;

        if(checkout.items[item.id]){
            checkout.items[item.id].quantity+=1;

        }else{
            checkout.items[item.id]={quantity:1,item:item};
        }
        removeCookie('checkout');
        setCookie('checkout',{checkout:checkout},{path:"/",maxAge:(60*60*24)});
        return {status:"success",message:"item added"};
    };

    const popItem=(itemId)=>{
        if(!checkout.items[itemId]){
            return {status:"error",message:"this item dont exits"};
        }

        checkout.total-=(checkout.items[itemId].item.product_price).toFixed(2);
        checkout.count-=1;
        if(checkout.items[itemId].quantity > 1){
            checkout.items[itemId].quantity-=1;

        }else{
            delete checkout.items[itemId];
        }

        removeCookie('checkout');
        setXdRerender(prev=>prev+=1);
        setCookie('checkout',{checkout:checkout},{path:"/",maxAge:(60*60*24)});

        return {status:"success",message:"item deleted"};
    };

    const deleteCart=()=>{

        setCheckout({items:{},count:0,total:0});
        removeCookie('checkout');
    };

    const context={
        axiosInstance,
        checkout,
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
