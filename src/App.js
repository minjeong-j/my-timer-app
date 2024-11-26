import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Timer from "./Timer";

// 타이머 정리가 제대로 작동하는지 확인
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/timer">Timer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
import React from "react";
import Timer from "./Timer";

function App() {
	return (
    	<div className="App">
        	<h1>React Time</h1>
          <Timer />
        </div>
    )
}

export default App;
*/
