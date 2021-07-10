import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkillHubContact from './compenents/SkillHubContact';
import Admin from './compenents/mentor/Admin'
import Home from './compenents/Home'
import Logout from './compenents/Logout'
import ProtectiveRoute from './ProtectiveRoute'
import ApprenticeHome from './compenents/apprentice/ApprenticeHome'
import Error from './compenents/Error'
import ViewDashboard from './compenents/mentor/ViewDashBoard'
import EditDashboard from './compenents/apprentice/EditDashBoard'

function App() {
  const token = localStorage.getItem('token')

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/contact" component={SkillHubContact} />
        <ProtectiveRoute exact path='/viewdashboard/:question/:actualQuestion' component={ViewDashboard} token={token} />
        <ProtectiveRoute exact path='/editdashboard/:question/:actualQuestion' component={EditDashboard} token={token} />
        <ProtectiveRoute exact path='/admin' component={Admin} token={token} />
        <ProtectiveRoute exact path='/apprenticehome' component={ApprenticeHome} token={token} />

        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App; 
