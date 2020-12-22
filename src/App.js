import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";
import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>


        </div>
    );
}


export default App;
