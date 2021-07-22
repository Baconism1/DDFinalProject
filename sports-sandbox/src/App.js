import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateTeam from "./components/CreateTeam";
import CreatePlayer from "./components/CreatePlayer";
import EditPlayer from "./components/EditPlayer";
import CreateGame from "./components/CreateGame";
import CreateStadium from "./components/CreateStadium";
import ListPlayers from "./components/ListPlayers";
import ListGames from "./components/ListGames";
import Home from "./components/LeaderBoard";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-player">Create Player</Link>
            </li>
            <li>
              <Link to="/create-team">Create Team</Link>
            </li>
            <li>
              <Link to="/edit-player">Edit Player</Link>
            </li>
            <li>
              <Link to="/create-game">Create Game</Link>
            </li>
            <li>
              <Link to="/create-stadium">Create Stadium</Link>
            </li>
            <li>
              <Link to="/listPlayers">Player Roster</Link>
            </li>
            <li>
              <Link to="/listGames">List Games</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create-team">
            <CreateTeam />
          </Route>
          <Route path="/create-player">
            <CreatePlayer />
          </Route>
          <Route path="/edit-player">
            <EditPlayer />
          </Route>
          <Route path="/create-game">
            <CreateGame />
          </Route>
          <Route path="/create-stadium">
            <CreateStadium />
          </Route>
          <Route path="/listPlayers">
            <ListPlayers />
          </Route>
          <Route path="/listGames">
            <ListGames />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
