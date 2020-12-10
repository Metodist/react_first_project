import './App.css';
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Profile from "./components/Profile";
import React from "react";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>

        </div>
    );
}


export default App;
