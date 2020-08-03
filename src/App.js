import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import MessagesContainer from "./components/Messages/messagesContaner";
import ContentContainer from "./components/Content/ContentContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
    return (
    <div className='main'>
        <div className='header'>
            <HeaderContainer/>
        </div>
        <div className= 'navandcontent'>
            <Navbar/>
            <Route path='/profile/:userId?' render={()=> <ContentContainer/>} />
            <Route path='/messages' render={()=> <MessagesContainer /> } />
            <Route path='/users' render={()=> <UsersContainer /> } />
        </div>
    </div>
  );
}

export default App;
