import './App.css';
import home from "./Component/home";
import about from "./Component/about";
import api from "./Component/api";
import india from "./Component/india";
import world from "./Component/world";
import vaccinate from "./Component/vaccinate";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/api" component={api} />
        <Route exact path="/india" component={india} />
        <Route exact path="/world" component={world} />
        <Route exact path="/vaccinate" component={vaccinate} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
