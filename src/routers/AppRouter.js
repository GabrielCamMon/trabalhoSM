import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "../components/Screens/Main";
import Resu from "../components/Screens/Resu";


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Main}  exact/>
        <Route path="/resultado" component={Resu}  />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
