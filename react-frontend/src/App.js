import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/components/Navbar";
import Home from "./components/home/Home";
import Organize from "./components/organize/Organize";
import Tournament from "./components/tournament/Tournament";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:tournament_id" element={<Tournament />}></Route>
        <Route path="/organize" element={<Organize />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
