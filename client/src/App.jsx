import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Comment from "./components/Comment.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/comment"} element={<Comment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
