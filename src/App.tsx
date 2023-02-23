import React from "react";
import "./App.css";

import Home from "./pages/HomePage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detail from "./pages/DetailPage";
import Navbar from "./Components/Blocks/Navbar";
import { Counter } from "./pages/CounterPage";

import { StoragePage } from "./pages/StoragePage";
import { CustomExercice } from "./pages/CustomExercice";
import { MemoPage } from "./pages/MemoPage";
import { CallBackPage } from "./pages/CallbackPage";
import { CME } from "./pages/CmExercice";
function App() {
  const titiles = [
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui ",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui ",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui ",
  ];
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/*  */}
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/list/" element={<Home />} />
          <Route path="/list/:id" element={<Detail />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/exercice-custom" element={<CustomExercice />} />
          <Route path="/memo" element={<MemoPage />} />
          <Route path="/callback" element={<CallBackPage />} />
          <Route path="/cme" element={<CME titles={titiles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
