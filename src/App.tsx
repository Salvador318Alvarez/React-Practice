import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from '../src/components/Navbar';
import SongsList from "./pages/SongsList";
import Randomizer from "./pages/Randomizer";
import History from "./pages/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/List" element={<SongsList/>} />
          <Route path="/Randomizer" element={<Randomizer/>} />
          <Route path="/History" element={<History/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;