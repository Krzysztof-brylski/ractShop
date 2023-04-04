import React, {useContext, useEffect} from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import HomePage from "./pages/homePage";
import NotFound from "./pages/404";
import AppContextProvider, {AppContext} from "./appContext";
import LoginPage from "./pages/loginPage";
import ProductPage from "./pages/productPage";
import CheckoutPage from "./pages/checkoutPage";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { CookiesProvider } from 'react-cookie';
import { AuthProvider,RequireAuth } from 'react-auth-kit'
import AdminPage from "./pages/admin/adminPage";

function App() {
    const alertOptions = {
        position: positions.TOP_RIGHT,
        timeout: 1500,
        offset: '50px',
        transition: transitions.SCALE
    };

    return (
        <div className={"App overflow-x-hidden"}>
            <AuthProvider authType = {'cookie'}
                          authName={'_auth'}
                          cookieDomain={window.location.hostname}
                          cookieSecure={false}
            >
                <CookiesProvider>
                    <AppContextProvider>
                        <AlertProvider template={AlertTemplate} {...alertOptions}>
                            <BrowserRouter>
                                <Navbar/>
                                    <Routes>
                                        <Route path={"/:category?"} element={<HomePage/>}/>
                                        <Route path={"/checkout"} element={<CheckoutPage/>}/>
                                        <Route path={"/login"} element={<LoginPage/>}/>
                                        <Route path={"/product/:product"} element={<ProductPage/>}/>
                                        <Route path={"/404"} element={<NotFound/>}/>
                                        <Route path={"/admin"} element={<RequireAuth loginPath={"/login"}><AdminPage/></RequireAuth>}/>
                                        <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                                    </Routes>
                                <Footer/>
                            </BrowserRouter>
                        </AlertProvider>
                    </AppContextProvider>
                </CookiesProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
