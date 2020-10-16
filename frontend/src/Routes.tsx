import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanageMap from './pages/OrphanageMap'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
