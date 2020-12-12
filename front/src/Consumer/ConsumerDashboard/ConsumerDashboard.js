import React from 'react';
import { useSelector } from 'react-redux';

export default function ConsumerDashboard() {
  const { user } = useSelector(store => store.auth)

  return (
    <>
      <div>
        Привет {user.name}
        Тут какая то инфа о юзере
      </div>
      <div>
      </div>
      <div>
          My orders
      </div>
    </>
  )
}
