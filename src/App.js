import "./App.css";
import Home from "./Pages/Home";
import AfterSearch from "./Components/AfterSearch/AfterSearch";
import Accommodation from "./Components/AfterAccommodation/Accommodation";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HostPage from "./Components/BecomHost/HostPage/HostPage";
import SignUp from "./Components/signup/SignUp";
import SignUpModale from "./Components/signup/SignUpModale";
import Accom_host from "./Components/accom_after_host/Accom_host";
import ListSpace from "./Components/accom_after_host/ListSpace";

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
        <Route component={() => <SignUpModale />} path="/signup" exact />
        <Route
          component={() => <Accom_host />}
          path="/collect_data"
          exact
        />
        <Route
          component={() => <ListSpace />}
          path="/host_form"
          
        />
        {/* <Route component={() => SignUpModale} path="/signupmodale" /> */}
      </Router>
    </div>
  );
}

export default App;
