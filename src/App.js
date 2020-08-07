import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/navigation'
import PageRenderer from './pege-renderer'

function App() {
  const user = {
    firstName:'Miguel',
    lastName:'Coder' 
  }

  return (
    <Router>
    <div className="App">
      <Navigation user={user} />
      <Switch>
      <Route path="/:page" component={PageRenderer}/>
      <Route path="/" render={() => <Redirect to="/home"/>}/>
      <Route component={()=>484}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
