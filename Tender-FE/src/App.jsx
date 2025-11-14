import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AllBid from "./pages/AllBid";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
         <Route path="/" element={<AllBid />} />
      </Routes>
    </Router>
  );
}

export default App;