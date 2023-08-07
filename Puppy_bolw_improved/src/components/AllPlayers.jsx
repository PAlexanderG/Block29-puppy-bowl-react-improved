import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/index.js";
import SinglePlayer from "./SinglePlayer.jsx";
import NewPlayerForm from "../componets/NewPlayersForm.jsx";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
//   console.log(AllPlayers);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  async function fetchData() {
    const data = await fetchAllPlayers();
    setPlayers(data);
    setFilteredPlayers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.value;
    const filteredPlayers = players.filter((player) => {
      return player.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPlayers(filteredPlayers);
  }
  return (
    <>
      <NewPlayerForm fetchAllPlayers={fetchData} />
      <section>
        <h1>All Players</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input onChange={handleSubmit} type="text" id="search" />
        </form>
        <main>
          {filteredPlayers.map((player) => (
            <SinglePlayer
              key={player.id}
              player={player}
              fetchAllPlayers={fetchData}
            />
          ))}
        </main>
      </section>
    </>
  );
}
