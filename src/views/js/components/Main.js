import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./customer/Form"
import List from "./customer/List"
import Edit from "./customer/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <hr />
        <Switch>
          <Route path="/customer/index" exact component={List} />
          <Route path="/customer/form"  component={Form} />
          <Route path="/customer/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;

ReactDOM.render(<Main />, document.getElementById('component-main'));
