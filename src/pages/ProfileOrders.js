import { useContext } from 'react';
import OrdersClient from '../components/order/OrdersClient';
import OrdersWorker from '../components/order/OrdersWorker';
import { UserContext } from '../contexts/userContext';
// import io from 'socket.io-client';
// import { API_URL } from '../config/env';
// const socket = io.connect(API_URL);

function ProfileOrders() {
  const { role } = useContext(UserContext);
  return <>{role === 'client' ? <OrdersClient /> : <OrdersWorker />}</>;
}

export default ProfileOrders;
