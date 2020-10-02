import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import Home from './pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}  exact />
      <Route path="*" component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>
)

export default Routes;