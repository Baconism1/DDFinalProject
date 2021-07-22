import { Games } from "../data/Games";

const ListGames = () => (
    <div>
      <h1>Team Roster</h1>
      {Games.map((Games, idx) => (
        <div key={idx}>
          {Games.id} {Games.gameName}
        </div>
      ))}
    </div>
  );




export default ListGames;