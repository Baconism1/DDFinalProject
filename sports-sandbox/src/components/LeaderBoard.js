import { teams } from "../data/teams";
//import { useState, useEffect } from "react";

//const LeaderBoard = () => {
 // const [leaderboardList, setLeaderboardList] = useState(null);

  /*useEffect(() => {
    fetchLeaderboards();
  }, []);

  */

 /* const fetchLeaderboards = async () => {
    const leaderboardRes = await API.fetch("/api/leaderboards");
    setLeaderboardList(leaderboardRes);
  };

  if (!leaderboardList) {
    return "loading...";
  }
*/

// api use 
/*
  if (leaderboardList) {
    return (
      <div>
        <h1>LeaderBoard</h1>
        {leaderboardList.map((team, idx) => (
          <div key={idx}>
            {team.id} {team.teamName} {team.score}
          </div>
        ))}
      </div>
    );
  }
};
*/

const LeaderBoard = () => (
    <div>
      <h1>LeaderBoard</h1>
      {teams.map((team, idx) => (
        <div key={idx}>
          {team.id} {team.teamName} {team.score}
        </div>
      ))}
    </div>
  );




export default LeaderBoard;

