class team {
    constructor(Id, Name, Wins, Losses, Location){
        this.Id = Id;
        this.Name = Name;
        this.Wins = Wins;
        this.Losses = Losses;
        this.Location = Location;
    }
}
class player {
    constructor(Id, FirstName, LastName, DOB, Position, TeamID){
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DOB = DOB;
        this.Position = Position;
        this.TeamID = TeamID;
    }
}
class location {
    constructor(Id, Name, City){
        this.Id = Id;
        this.Name = Name;
        this.Wins = City;
    }
}
class game {
    constructor(Id, Home, Away, Winner, Loser, When, LocatoinID){
        this.Id = Id;
        this.Name = Home;
        this.Away = Away;
        this.Winner = Winner;
        this.Loser = Loser;
        this.When = When;
        this.LocatoinID = LocatoinID;
    }
}

module.exports = {
    team : team,
    player : player,
    location : location,
    game : game
};