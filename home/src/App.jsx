import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';

import "./index.scss";
import Footer from "./Footer";
import ProductList from "./ProductList";

const App = () => {

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <Header/>
            <main className="my-8">
                <h1 className="text-2xl font-bold">
                    <ProductList/>
                </h1>
            </main>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"));
