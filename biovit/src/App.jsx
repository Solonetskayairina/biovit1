// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/Routes/Routes";

const App = () => {
    return (
        <div >
            <Header/>
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;

