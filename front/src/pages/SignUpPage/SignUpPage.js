import React, { useEffect, useState } from 'react';
import ConsumerSignUpForm from '../../Consumer/ConsumerSignUpForm/ConsumerSignUpForm';
import SupplierSignUpForm from '../../Supplier/SupplierSignUpForm/SupplierSignUpForm';
function SignUpPage(props) {
  const [state, setState] = useState(true);
  return (
    <>
    <select onChange={()=>setState(!state)}>
      <option>supplier</option>
      <option>consumer</option>
    </select>
    <div>
      {state ? <SupplierSignUpForm/> : <ConsumerSignUpForm/>}
    </div>
      </>
  );
}

export default SignUpPage;
