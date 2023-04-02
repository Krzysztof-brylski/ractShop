import React, {useContext, useEffect} from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import HomePage from "./pages/homePage";
import NotFound from "./pages/404";
import AppContextProvider, {AppContext} from "./appContext";
import ContactPage from "./pages/contactPage";
import ProductPage from "./pages/productPage";
import CheckoutPage from "./pages/checkoutPage";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { CookiesProvider } from 'react-cookie';
function App() {
    const alertOptions = {
        // you can also just use 'bottom center'
        position: positions.TOP_RIGHT,
        timeout: 1500,
        offset: '50px',
        // you can also just use 'scale'
        transition: transitions.SCALE
    }

  return (
    <div className="App">
        <CookiesProvider>
          <AppContextProvider>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <BrowserRouter>
                    <Navbar/>
                        <Routes>
                            <Route path={"/:category?"} element={<HomePage/>}/>
                            <Route path={"/checkout"} element={<CheckoutPage/>}/>
                            <Route path={"/contact"} element={<ContactPage/>}/>
                            <Route path={"/product/:product"} element={<ProductPage/>}/>
                            <Route path={"/404"} element={<NotFound/>}/>
                            <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                        </Routes>
                   <Footer/>
                </BrowserRouter>
            </AlertProvider>
          </AppContextProvider>
        </CookiesProvider>
    </div>
  );
}

export default App;
