import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Collections from "./screens/Collections";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/collection/cake" exact>
          <Collections type="cake" />
        </Route>
        <Route path="/collection/chocobouquet" exact>
          <Collections type="chocobouquet" />
        </Route>
        <Route path="/collection/aanadecoration" exact>
          <Collections type="aanadecoration" />
        </Route>
        <Route path="/collections" exact>
          <Collections type="all" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
