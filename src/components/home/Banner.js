import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <h1>บริการดูแลบ้านที่ดีที่สุด</h1>
        <h3>บริการเกี่ยวกับบ้านครบวงจร</h3>
        <h3>ที่เดียวครบจัดการได้ทุกปัญหาเรื่องบ้าน</h3>
        <Link to="/service">
          <button>จองบริการ</button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
