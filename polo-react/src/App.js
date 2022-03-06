import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Organize from "./components/Organize";
import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <BrowserRouter>
      <Sidemenu />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/organize" element={<Organize />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
