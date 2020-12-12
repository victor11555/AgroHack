import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Proposals from './pages/Proposals';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {showProposalsAC} from './redux/actionCreator';

function App() {
  return (
    <>
        <NavBar />

        <Switch>
        <Route exact path='/'/>
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />



        <Route path='/proposals' component={Proposals}/>
      </Switch>
    </>
  );
}

export default App;
