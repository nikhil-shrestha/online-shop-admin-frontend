import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminNav from './components/admin-nav/admin-nav.component';
import Header from './components/header/header.component';

import Dashboard from './components/dashboard/dashboard.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <div id="greenfield-header" />

      <div id="outer-container">
        <AdminNav />
        <div id="content-container">
          <Header />

          <div id="content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>

        <br class="clear" />
      </div>
    </div>
  );
}

export default App;
