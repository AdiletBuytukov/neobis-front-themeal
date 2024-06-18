import './App.css'
import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";


function App() {

    return (
        <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<HomePage />} />

        </Routes>
        </Router>
    );
};

export default App;
