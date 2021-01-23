import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {Redirect} from "react-router";

import { DefaultLayout } from './layouts/default'
import { Orders } from './features/orders'
import { Friends } from "./features/friends";
import { Groceries } from "./features/groceries";

const App = () => <Router>
  <Switch>
    <Redirect exact from="/" to="commands" />
    <Route>
      <DefaultLayout>
        <Route path={'/commands'}>
          <Orders/>
        </Route>
        <Route path={'/friends'}>
          <Friends/>
        </Route>
        <Route path={'/groceries'}>
          <Groceries/>
        </Route>
      </DefaultLayout>
    </Route>
  </Switch>
</Router>

export default App
