import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EditTask from './List/EditTask';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Route exact path = '/' component = { Dashboard } />
            <Route exact path = '/edittask/:id' component = { EditTask} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
