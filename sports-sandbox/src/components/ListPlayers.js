import { Roster } from "../data/Roster";

const ListPlayers = () => (
    <div>
      <h1>Team Roster</h1>
      {Roster.map((Roster, idx) => (
        <div key={idx}>
          {Roster.id} {Roster.playerName}
        </div>
      ))}
    </div>
  );




export default ListPlayers;