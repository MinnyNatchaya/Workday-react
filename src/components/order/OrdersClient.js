import OrdersClientActive from './OrdersClientActive';
import OrdersClientForm from './OrdersClientForm';
import Review from './Review';

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
