import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";



function App() {
  return (
    <div className="app">
        {/* bem naming convention */}

        <h1>Slack</h1>

        <Header />  

        <div className="app__body">

         <Sidebar />

        {/* REACT-ROUTER --> Chat screen */}

        </div>




    </div>
  );
}

export default App;
