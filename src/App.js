import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Thankyou from "./pages/Thankyou";

function App(){
    return(
        <div>
            <Router>    
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/result" element={<Result/>}></Route>
                    <Route path="/thankyou" element={<Thankyou />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;