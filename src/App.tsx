import React from "react";
import "./firebase/firebase";
import { Login, Error, Register } from "@modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
