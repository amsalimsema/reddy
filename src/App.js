import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Legal from "./Components/Legal";
import NavTop from "./Components/Nav";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <NavTop />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/legal" component={Legal} />
        </Switch>
        <div id="contact">
          <Contact />
        </div>
      </Router>
    </>
  );
}

export default App;
