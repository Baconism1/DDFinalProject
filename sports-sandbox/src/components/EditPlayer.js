import { useState } from "react";
import { teams } from "../data/teams";

const EditPlayer = () => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [playerTeam, setPlayerTeam] = useState(null);

  // Fetch existing player data and assign it to state.
  const fetchExistingPlayer = () => {
    // Finished fetching player
    // setCurrentPlayer(player)
    // Find team that player belongs to
    // setPlayerTeam(team)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); // prevents any default behavior by the browser for forms.
    console.log(e);

    const newPlayer = {
      playerName: e.target.playerName.value,
    };

    console.log("newPlayer: ", newPlayer);

    // Write some API
    try {
    } catch (err) {}
  };

  return (
    <div>
      <h1>Edit Player</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          Player Name:
          <input type="text" name="playerName" />
        </label>
        <br />
        <select name="teamName">
          {teams.map((team, idx) => (
            <option value={team.teamName}>{team.teamName}</option>
          ))}
        </select>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditPlayer;
