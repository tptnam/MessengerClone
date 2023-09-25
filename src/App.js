import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout";
import Login from "./login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
