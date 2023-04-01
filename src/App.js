import React, {useContext, useEffect} from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import HomePage from "./pages/homePage";
import NotFound from "./pages/404";
import AppContextProvider, {AppContext} from "./appContext";
import ContactPage from "./pages/contactPage";



function App() {


  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/checkout"} element={<HomePage/>}/>
                <Route path={"/contact"} element={<ContactPage/>}/>
                <Route path={"/product/:product"} element={<HomePage/>}/>
                <Route path={"/404"} element={<NotFound/>}/>
                <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
              </Routes>
            <Footer/>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
