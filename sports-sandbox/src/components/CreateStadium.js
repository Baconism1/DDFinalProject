const CreateStadium = () => {
    const handleOnSubmit = (e) => {
      // Get team name from value.
      const newStadium = {
        locationID:  e.target.locationID.value,
        locationName:  e.target.Stadium.value,
        city:  e.target.city.value
      }
      fetch('/api/locations', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newStadium)})
      console.log("newStadium: ", newStadium);
  
      // Create new team object from values.
  
      // Write to DB
    };
  
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <h1>Create Stadium</h1>
          <label>
            Stadium Name:
            <input type="text" name="Stadium" />
          </label>
          <br />
          <label>
            Location ID:
            <input type="text" name="locationID" />
          </label>
          <br />
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  };
  
  export default CreateStadium ;