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

function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <Register /> */}
     {/* <Signin /> */}
     <Dashboard />
     {/* <ViewSingleIssue /> */}
     {/* <NewIssue /> */}
     {/* <EditIssue /> */}
    </div>
  );
}

export default App;
