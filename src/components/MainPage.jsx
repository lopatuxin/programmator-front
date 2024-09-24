import React from 'react';
import './MainPage.css';
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const MainPage = () => {

    return (
        <div className="main-page">
            <Header />
            <Sidebar />
            <div className="main-content">

            </div>
        </div>
    );
};

export default MainPage;
