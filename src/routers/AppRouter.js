import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "../components/Screens/Main";


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
     
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
