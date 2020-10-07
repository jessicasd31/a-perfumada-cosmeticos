import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}  exact />
      <Route path="/sobre" component={Sobre} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/contato" component={Contato} />
      <Route path="*" component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>
)

export default Routes;