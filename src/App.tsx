import React, {useState} from 'react';
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
import { NotFound } from './NotFound';

function App() {
  const [isAuth,setIsAuth] = useState(true);
  return (
    <div className="App">
      {isAuth && (
        <div>
          <Navbar />
     <Router>
       <Dashboard path='/' />
       <NewIssue path='/new' />
       <EditIssue path='/edit' />
       <ViewSingleIssue path='/issue/:issueID' />
       <NotFound default />
     </Router>
        </div>
      )}
      {!isAuth && (
        <div>
        <Router>
          <Register path='/' />
          <Signin path='/signin' />
          <NotFound default />
        </Router>
        </div>
      )}
      
    </div>
  );
}

export default App;
