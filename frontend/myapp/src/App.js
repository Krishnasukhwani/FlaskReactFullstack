import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent></HeaderComponent>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListUserComponent}></Route>
            <Route path='/users' component={ListUserComponent}></Route>
            <Route path='/add-user/:id' component={CreateUserComponent}></Route>
            <Route path='/view-user/:id' component={ViewUserComponent}></Route>
            <Route path='/update-user/:id' component={UpdateUserComponent}></Route>          
            {/* <Router component={CreateUserComponent} path='/add-user/:id'></Router>
            <Router component={UpdateUserComponent} path='/update-user/:id'></Router>
            <Router component={ViewUserComponent} path='/view-user/:id'></Router> */}
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
