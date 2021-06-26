import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
//import Home from "./Components/Home";
import Web from "./Components/Web";
//import NavTop from "./Components/Nav";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        {/* <NavTop /> */}
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Web} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
