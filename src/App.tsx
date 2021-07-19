import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './Register';
import { Signin } from './Signin';
import { Dashboard } from './Dashboard';
import { Navbar } from './Dashboard/Navbar';
import { ViewSingleIssue } from './ViewSingleIssue';
import { NewIssue } from './NewIssue';
import { EditIssue } from './EditIssue';
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Navbar />
     <Router>
       <Dashboard path='/' />
       <NewIssue path='/new' />
       <EditIssue path='/edit' />
       <ViewSingleIssue path='/issue/:issueID' />
     </Router>
    </div>
  );
}

export default App;
