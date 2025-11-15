import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AllBid from "./pages/AllBid";
import CreateBid from "./pages/CreateBid";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} /> 
         <Route path="/allbid" element={<AllBid />} />
         <Route path="/create-bid" element={<CreateBid />} />
         
      </Routes>
    </Router>
  );
}

export default App;