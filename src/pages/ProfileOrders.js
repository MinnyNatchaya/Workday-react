import { useContext } from 'react';
import OrdersClient from '../components/order/OrdersClient';
import OrdersWorker from '../components/order/OrdersWorker';
import { UserContext } from '../contexts/userContext';

function ProfileOrders() {
  const { role } = useContext(UserContext);
  return <>{role === 'client' ? <OrdersClient /> : <OrdersWorker />}</>;
}

export default ProfileOrders;
