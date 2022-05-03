import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Organize from "./components/Organize";
import Tournaments from "./components/Tournaments/Tournaments";
import TournamentPage from "./components/Tournaments/TournamentPage";
import Schedule from "./components/Tournaments/Schedule/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/organize" element={<Organize />}></Route>
        <Route path="/tournaments" element={<Tournaments />}></Route>
        <Route
          path="/tournaments/:tournament_id"
          element={<TournamentPage />}
        ></Route>
        <Route
          path="/tournaments/:tournament_id/schedule"
          element={<Schedule />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
