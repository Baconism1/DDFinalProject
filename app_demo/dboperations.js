let config = require('./dbconfig'); // loads connection string
const sql = require('mssql');       // load mssql

///// Locations /////
async function addLocation(location) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('locationID', sql.NVarChar, location.locationID)
            .input('locationName', sql.NVarChar, location.locationName)
            .input('city', sql.NVarChar, location.city)
            .execute('InsertLocation');
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

///// Teams /////
async function getTeams(){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * FROM Teams");
        return result.recordsets;
    }
    catch (error){
        console.log(error);
    }
}
async function getTeam(teamId) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, teamId)
            .query("SELECT * from Teams where Id = @input_parameter");
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getRoster(teamID) { // roster for some team 
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, teamID)
            .query("SELECT * from Players where TeamID = @input_parameter");
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
async function getLeaderboard() { // most wins this season
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("SELECT * from Teams where ORDER BY Wins");
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
async function addTeam(team) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('teamID', sql.NVarChar, team.teamID)
            .input('teamName', sql.NVarChar, team.teamName)
            .input('Wins', sql.Int, team.Wins)
            .input('Losses', sql.Int, team.Losses)
            .input('locationID', sql.NVarChar, team.locationID)
            .execute('InsertTeam');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
async function deleteTeam(teamID) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, teamID)
            .query("DELETE FROM Teams where Id = @input_parameter");
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
       
///// players /////
async function addPlayer(player) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('playerID', sql.Int, player.playerID)
            .input('Fname', sql.NVarChar, player.Fname)
            .input('Lname', sql.NVarChar, player.Lname)
            .input('Dob', sql.NVarChar, player.Dob)
            .input('Position', sql.NVarChar, player.Position)
            .input('teamID', sql.Int, player.teamID)
            .execute('InsertPlayer');
        return result;
    }
    catch (err) {
        console.log(err);
    }
}
async function deletePlayer(playerID) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, playerID)
            .query("DELETE FROM Players where Id = @input_parameter");
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

///// games /////
async function addGame(game) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('gameID', sql.Int, game.gameID)
            .input('Home', sql.NVarChar, game.Home)
            .input('Away', sql.NVarChar, game.Away)
            .input('winner', sql.NVarChar, game.winner)
            .input('loser', sql.NVarChar, game.loser)
            .input('Date', sql.Date, game.Date)
            .input('locationID', sql.NVarChar, game.locationID)
            .execute('InsertGame');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
async function getGame(gameID) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, gameID)
            .query("SELECT * from Games where Id = @input_parameter");
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function updateGame(gameID) {  // TODO
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.Int, gameID) // TODO
            .query("SELECT * from Games where Id = @input_parameter");
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTeams : getTeams,
    getTeam : getTeam,
    addTeam : addTeam,
    deleteTeam : deleteTeam,
    addPlayer : addPlayer,
    deletePlayer : deletePlayer,
    addGame : addGame,
    getGame : getGame,
    updateGame : updateGame,
    getRoster : getRoster,
    getLeaderboard : getLeaderboard,
    addLocation: addLocation
}