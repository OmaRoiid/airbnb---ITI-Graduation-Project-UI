import "./App.css";
import Home from "./Pages/Home";
import AfterSearch from "./Components/AfterSearch/AfterSearch";
import Accommodation from "./Components/AfterAccommodation/Accommodation";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HostPage from "./Components/BecomHost/HostPage/HostPage";
import SignUp from './Components/signup/SignUp'

function App() {
  return (
    <div>
      <Router>
        <Route component={() => <Home />} path="/" exact />
        <Route component={() => <AfterSearch />} path="/search_results" exact />
        <Route
          component={() => <Accommodation />}
          path="/accommodation"
          exact
        />
        <Route component={() => <HostPage />} path="/become_host" exact />
        <Route component={() => <SignUp />} path="/signup" exact />
      </Router>
    </div>
  );
}

export default App;
