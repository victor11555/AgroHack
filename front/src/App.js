import { Switch, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import CurrentPosition from './CurrentPosition/CurrentPosition';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Proposals from './pages/Proposals';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <CurrentPosition />
      <NavBar />
      <Switch>
        <Route exact path='/' />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/main' component={MainPage} />
        <Route path='/proposals' component={Proposals} />
      </Switch>
    </>
  );
}

export default App;
