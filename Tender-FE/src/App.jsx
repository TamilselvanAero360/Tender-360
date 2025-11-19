import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AllBid from "./pages/AllBid";
import CreateBid from "./pages/CreateBid";
import EditBid from "./pages/EditBid";
import ViewBid from "./pages/ViewBid";
import ActiveBid from "./pages/ActiveBid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/allbid" element={<AllBid />} />
        <Route path="/active" element={<ActiveBid />} />
        <Route path="/create-bid" element={<CreateBid />} />
        <Route path="/edit-bid/:id" element={<EditBid />} />
        <Route path="/view-bid" element={<ViewBid />}/>

      </Routes>
    </Router>
  );
}

export default App;
