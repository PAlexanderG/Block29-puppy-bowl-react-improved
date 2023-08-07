import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>PUPPY BOWL</h1>
      <div id="container">
        {/* Create a Navbar with appropriate links to your different Routes */}
        <div id="navbar">
          <Link to="/AllPlayers.jsx">All Players</Link>
          <Link to="/SinglePlayer.jsx">Single Player</Link>
          <Link to="/NewPLayerForm.jsx">Player Form</Link>
        </div>
        {/* replace it with the Routes component */}
        <div id="main-section"></div>
        <div>
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            <Route path="/players/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
