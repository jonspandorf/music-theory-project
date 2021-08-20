import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Listening from './pages/listening';


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/singing' >
              {/* <Singing /> */}
          </Route>
          <Route exact path='/listening'>
             <Listening />
          </Route>
          <Route exact path='/hybrid'>
            {/* <Hybrid /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
