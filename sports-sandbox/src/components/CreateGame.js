const CreateGame = () => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      // Get team name from value.
      // Create new team object from values.
      const newGame = {
        gameID: e.target.gameID.value,
        Home: e.target.Home.value,
        Away: e.target.Away.value,
        Date: e.target.Date.value,
        winner: e.target.winner.value,
        loser: e.target.loser.value,
        locationID: e.target.locationID.value
      }
  
      fetch('/api/games', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newGame)})

      try {
      } catch (err) {}
      // Write to DB
    };
  
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <h1>Create Game</h1>
          <label>
            Game Number:
            <input type="text" name="gameID" />
          </label>
          <br />
          <label>
            Home TeamID:
            <input type="text" name="Home" />
          </label>
          <br />
          <label>
            Away TeamID:
            <input type="text" name="Away" />
          </label>
          <br />
          <label>
            Date:
            <input type="text" name="Date" />
          </label>
          <br />
          <label>
            Winning TeamID:
            <input type="text" name="winner" />
          </label>
          <br />
          <label>
            Losing TeamID:
            <input type="text" name="loser" />
          </label>
          <br />
          <label>
            LocationID:
            <input type="text" name="locationID" />
          </label>
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  };
  
  export default CreateGame;
  