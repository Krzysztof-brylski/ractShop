import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios, {Axios} from "axios";
import { useSignIn } from 'react-auth-kit'
import {useNavigate} from "react-router-dom";

/**
 * contact page
 * @returns {*}
 * @constructor
 */
function LoginPage() {

    const signIn=useSignIn();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr]=useState(null);
    const navigate = useNavigate();
    const  onSubmit= async ()=>{
        axios.post("http://127.0.0.1:3001/login",{email:email,password:password}).then((res)=>{
            console.log(res);
            signIn({
                token:res.data.accessToken,
                expiresIn:900,
                tokenType:"Bearer",
                authState:{...res.data.user}
            });
            navigate("/admin");
        }).catch((err)=>{
            setErr(err.response.data);
        });
    };

    const handleEmailInput=(event)=>{
        setEmail(event.target.value);
    };
    const handlePasswordInput=(event)=>{
        setPassword(event.target.value);
    };
    return(
        <div className={"bg-gray-300 w-screen h-screen flex justify-center items-center "}>
            <div className={"flex justify-center items-center w-1/3 h-2/3 bg-white rounded-md hover:rounded-2xl hover:transition-all"}>
                <form className={"flex flex-col items-between w-auto"}>
                    <h2 className={"text-xl font-semibold my-3 capitalize"}>Login form:</h2>
                    <input type={"email"} placeholder={"Enter your email"} className={"outline-none w-auto my-3 px-2 py-1 border-2 border-gray-200 rounded-sm " +
                    "focus:border-gray-400 focus:transition-all focus:rounded-md"} onInput={handleEmailInput}/>
                    <input type={"password"} placeholder={"Enter your password"} className={"outline-none w-auto my-3 px-2 py-1 border-2 border-gray-200 rounded-sm " +
                    "focus:border-gray-400 focus:transition-all focus:rounded-md"} onInput={handlePasswordInput}/>

                    <button onClick={onSubmit} disabled={ email === "" && password === ""} type={"button"} className={
                        "mt-4 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-400 hover:text-black hover:transition-all disabled:cursor-not-allowed"
                    }>
                        Login in
                    </button>
                    {
                        err !== null &&(<span className={"font-semibold mt-5 text-md text-red-600 capitalize"}>{err}!</span>)
                    }
                    <span className={"text-sm mt-10"}>Fortgot your password ? <a href={"#"} className={"cursor-pointer font-semibold capitalize z-50"}>press there</a></span>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;