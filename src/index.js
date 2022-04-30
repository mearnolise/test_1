import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import { StrictMode } from "react";




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
    
);

/*
import AboutPage from "./components/pages/AboutPage";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Router>

*/
