import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Comment from "./components/Comment.jsx";


function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/comment"} element={<Comment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
