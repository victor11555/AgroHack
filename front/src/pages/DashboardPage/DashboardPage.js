import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SupplierDashboard from '../../Supplier/SupplierDashboard/SupplierDashboard';
import ConsumerDashboard from '../../Consumer/ConsumerDashboard/ConsumerDashboard';

export default function DashboardPage() {
  // const [state, setState] = useState(true);
  const { user } = useSelector(store => store.auth);
  let tmp = true;
  console.log(user.role);
  if (!user) {
    // your are not authorized
    // useEffect(()=> setState(null));
  } //else if (user.role === 'supplier') {
    // // useEffect(() => {
    // fetch('http://localhost:4000/supplier', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/json',
    //   },
    //   body: JSON.stringify({ id: user._id }),
    // })
    //   .then(res => res.json())
    //   .then(supplier => setState(() => true ));
    // // }, [])
    // setState(true )
  //}
  else if (user.role === 'consumer') {
    // // useEffect(() => {
    // fetch('http://localhost:4000/consumer', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/json',
    //   },
    //   body: JSON.stringify({ id: user._id }),
    // })
    //   .then(res => res.json())
    //   .then(consumer => console.log(consumer) ); //setState( false));
    // // }, [])
    // setState( false )
    tmp = false
  }
  // console.log(state);
  return (
    <div>
      {tmp ? <SupplierDashboard /> : <ConsumerDashboard />}
    </div>
  );
}
