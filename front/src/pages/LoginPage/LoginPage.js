import React, { useState } from 'react';

import SupplierLoginForm from '../../Supplier/SupplierLoginForm/SupplierLoginForm';
import ConsumerLoginForm from '../../Consumer/ConsumerLoginForm/ConsumerLoginForm';

function LoginPage(props) {
  const [state, setState] = useState(true);
  return (
    <>
      <select onChange={()=>setState(!state)}>
        <option>supplier</option>
        <option>consumer</option>
      </select>
      <div>
        {state ? <SupplierLoginForm /> : <ConsumerLoginForm/>}
      </div>
    </>
  );
}

export default LoginPage;
