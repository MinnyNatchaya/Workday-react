import { useState } from 'react';

import OrdersClientActive from './OrdersClientActive';
import OrdersClientForm from './OrdersClientForm';
import Review from './Review';
import Slip from './Slip';

function OrdersClient() {
  return (
    <section className="user_order_page">
      <div className="container">
        {/* <Review /> */}

        <div className="headerFix">
          <h2>MY ORDER</h2>
        </div>
        <OrdersClientForm />
        {/* <OrdersClientActive /> */}
      </div>
    </section>
  );
}

export default OrdersClient;
