import './App.css'
import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import MealsInfo from "./components/MealsInfo";


function App() {

    return (
        <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/meal/:id" element={<MealsInfo />} />
        </Routes>
        </Router>
    );
};

export default App;
