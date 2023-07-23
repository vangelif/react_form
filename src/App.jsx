import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import countries from './components/data/countries';
import UserSettings from './components/UserSettings'; //

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          <Login />
          </Route>
          <Route path="/register">
            <Register countries={countries} />
          </Route>
          <Route path="/user-settings">
            <UserSettings />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
