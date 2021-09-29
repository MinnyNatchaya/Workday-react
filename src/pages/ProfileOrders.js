import OrdersClientActive from '../components/OrdersClientActive';
import OrdersClient from '../components/OrdersClient';
import Review from '../components/Review';
import Slip from '../components/Slip';
import OrdersWorker from '../components/OrdersWorker';

function ProfileOrders() {
  return (
    <>
      <section className="user_order_page">
        <div className="container">
          <Review />

          <div className="headerFix">
            <h2>MY ORDER</h2>
          </div>
          <OrdersClient />
          <OrdersClientActive />
        </div>
      </section>

      {/* <section class="worker_service_fix_page">
        <div class="container">
          <Slip />
          <OrdersWorker />
        </div>
      </section> */}
    </>
  );
}

export default ProfileOrders;
