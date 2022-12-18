import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from 'home/Header';
import Footer from 'home/Footer';
import ProductDetail from "./ProductDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => (
    <BrowserRouter>

        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <Header/>
            <Routes>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
            <main className="my-8">
            </main>

            <Footer/>
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App/>, document.getElementById("app"));
