import ServiceTypeWorkerFilter from '../components/service/ServiceTypeWorkerFilter';
import ServiceTypeWorkerForm from '../components/service/ServiceTypeWorkerForm';

function SeviceTypeWorker() {
  return (
    <section className="worker_service_fix_page">
      <div className="container">
        <div className="headerFix">
          <h2>งานไฟฟ้า</h2>
        </div>
        <ServiceTypeWorkerFilter />
        <ServiceTypeWorkerForm />
      </div>
    </section>
  );
}

export default SeviceTypeWorker;
