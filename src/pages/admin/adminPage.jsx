import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser,faShoppingBasket,faTags,faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useAuthUser} from 'react-auth-kit'
function AdminPage() {
   const auth=useAuthUser();
   console.log(auth);
   return (
       <div className={"flex w-screen h-screen"}>
           <div className={"flex flex-col w-1/5 h-screen bg-gray-400  px-2 py-10 "}>

               <div className={"flex flex-col items-start"}>
                    <span className={"text-white text-xl font-semibold text-md m-3 cursor-pointer"}>
                        Product
                        <FontAwesomeIcon icon={faShoppingBasket}  className={"px-10"}/>
                    </span>
                    <span className={"text-white text-xl font-semibold text-md m-3  cursor-pointer"}>
                        Tags
                        <FontAwesomeIcon icon={faTags} className={"px-10"}/>
                    </span>
               </div>
               <div className={"flex flex-col"}>
                   <div className={"my-3 px-2 border-b-2 border-white"}>
                       <FontAwesomeIcon icon={faUser}/>
                       <h2 className={"capitalize"}>{auth().name}</h2>
                   </div>
                    <button><FontAwesomeIcon icon={faRightFromBracket}/>Logout</button>
               </div>
           </div>
           <div className={"flex flex-col w-4/5 h-screen bg-gray-200"}>

           </div>
       </div>
   );
}
export default AdminPage;