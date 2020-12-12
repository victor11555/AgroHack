import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SupplierDashboard from '../../Supplier/SupplierDashboard/SupplierDashboard';
import ConsumerDashboard from '../../Consumer/ConsumerDashboard/ConsumerDashboard';

export default function DashboardPage() {
  const { user } = useSelector(store => store.auth);
  let tmp = true;
  console.log(user.role);
  if (!user) {
    // your are not authorized
  } else if (user.role === 'consumer') {
    tmp = false
  }
  return (
    <div>
      {tmp ? <SupplierDashboard /> : <ConsumerDashboard />}
    </div>
  );
}
