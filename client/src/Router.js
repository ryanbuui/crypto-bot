import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Page from './pages/ExamplePage/Page';

function Router() {

  const {loggedIn} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>
            Home
          </div>
        </Route>
        {
          loggedIn === false &&
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <div>
                <Login />
              </div>
            </Route>
          </>
        }
        {
          loggedIn === true && 
          <Route path="/crypto">
            <Page />
          </Route>
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Router;