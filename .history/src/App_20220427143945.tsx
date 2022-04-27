import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header, Ex1, Ex2, Ex3, Ex4, Ex5, Ex7, Ex8, Ex6, Ex10 } from "./components/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          <Route path="/ex4" element={<Ex4 />} />
          <Route path="/ex5" element={<Ex5 />} />
          <Route path="/ex6" element={<Ex6 />} />
          <Route path="/ex7" element={<Ex7 />} />
          <Route path="/ex8" element={<Ex8 />} />
          <Route path="/ex10" element={<Ex10 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
