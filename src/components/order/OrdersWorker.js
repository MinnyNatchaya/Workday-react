import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import OrdersWorkerForm from './OrdersWorkerForm';
import Review from './Review';
import Slip from './Slip';

function OrdersWorker() {
  return (
    <section className="worker_service_fix_page">
      <div className="container">
        {/* <Review /> */}

        <OrdersWorkerForm />
      </div>
    </section>
  );
}

export default OrdersWorker;
