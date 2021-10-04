import OrdersWorkerForm from './OrdersWorkerForm';
import Review from './Review';
import Slip from './Slip';

function OrdersWorker() {
  return (
    <section class="worker_service_fix_page">
      <div class="container">
        <Review />
        <div className="headerFix">
          <h2>MY ORDER</h2>
        </div>
        <Slip />
        <OrdersWorkerForm />
      </div>
    </section>
  );
}

export default OrdersWorker;
