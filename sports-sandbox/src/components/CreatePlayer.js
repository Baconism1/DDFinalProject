import { teams } from "../data/teams";

const CreatePlayer = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault(); // prevents any default behavior by the browser for forms.
    console.log(e);

    /**
     * {
     *  playerName: ""
     *  teamID: ""
     * }
     */

    const newPlayer = {
      Fname: e.target.Fname.value,
      Lname: e.target.Lname.value,
      playerID: e.target.playerID.value,
      Dob: e.target.Dob.value,
      Position: e.target.Position.value,
      teamID: e.target.teamID.value
    };
    fetch('/api/players', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newPlayer)})
    console.log("newPlayer: ", newPlayer);

    // Write some API
    try {
    } catch (err) {}
  };

  return (
    <div>
      <h1>Create Player</h1>
      <form onSubmit={handleOnSubmit}>
      <label>
          Player ID:
          <input type="text" name="playerID" />
        </label>
        <br />
        <label>
          Player First Name:
          <input type="text" name="Fname" />
        </label>
        <br />
        <label>
          Player Last Name:
          <input type="text" name="Lname" />
        </label>
        <br />
        <label>
          Player DOB:
          <input type="text" name="Dob" />
        </label>
        <br />
        <label>
          Player Position:
          <input type="text" name="Position" />
        </label>
        <br />
        <label>
          Player Team ID:
          <input type="text" name="teamID" />
        </label>
        <br />
        <select name="teamName">
          {teams.map((team, idx) => (
            <option value={team.teamName}>{team.teamName}</option>
          ))}
        </select>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default CreatePlayer;
