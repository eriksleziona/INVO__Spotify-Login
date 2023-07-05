import React from "react";
import { Login, Error } from "@modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
