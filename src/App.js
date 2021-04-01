import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Legal from "./Components/Legal";
import NavTop from "./Components/Nav";

function App() {
  return (
    <>
      <Router>
        <NavTop />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/legal" component={Legal} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
