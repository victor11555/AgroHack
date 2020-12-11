import { Switch, Route } from 'react-router-dom';

import ConsumerSignUpForm from './Consumer/ConsumerSignUpForm/ConsumerSignUpForm';
import ConsumerLoginForm from './Consumer/ConsumerLoginForm/ConsumerLoginForm';
import ConsumerDashboard from './Consumer/ConsumerDashboard/ConsumerDashboard';

import SupplierLoginForm from './Supplier/SupplierLoginForm/SupplierLoginForm';
import SupplierSignUpForm from './Supplier/SupplierSignUpForm/SupplierSignUpForm';
import SupplierDashboard from './Supplier/SupplierDashboard/SupplierDashboard';

function App() {

  return (
    <>
      <Switch>
        <Route path='/'>

        </Route>
        <Route path='/auth/signup'>
          { 'smth' ? <ConsumerSignUpForm/> : <SupplierSignUpForm/> }
        </Route>
        <Route path='/auth/login'>
          { 'smth' ? <ConsumerLoginForm/> : <SupplierLoginForm/> }

        </Route>
        <Route path='/auth/dashboard'>
          { 'smth' ? <ConsumerDashboard/> : <SupplierDashboard/> }

        </Route>
      </Switch>
    </>
  );
}

export default App;
