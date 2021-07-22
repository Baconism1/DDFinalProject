const CreateTeam = () => {
  const handleOnSubmit = (e) => {
    // Get team name from value.
    e.preventDefault();

    const newTeam = {
      teamID: e.target.teamID.value,
      teamName: e.target.teamName.value,
      locationID: e.target.locationID.value,
      Wins: '0',
      Losses: '0'
    }

    fetch('/api/teams', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newTeam)})
    console.log(e.target.teamName.value);

    // Create new team object from values.

    // Write to DB
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h1>Create Team</h1>
        <label>
          Team Name:
          <input type="text" name="teamName" />
        </label>
        <br />
        <label>
          Team ID:
          <input type="text" name="teamID" />
        </label>
        <br />
        <label>
          Location ID:
          <input type="text" name="locationID" />
        </label>
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default CreateTeam;
