import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";
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
