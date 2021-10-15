import { Carousel } from 'react-bootstrap-carousel';
function CarouselReview() {
  return (
    <section className="review">
      <div className="container">
        <div className="comment">
          <i1 className="fas fa-quote-left"></i1>
          {/* <Carousel>
            <Carousel.Item>
              <img></img>
            </Carousel.Item>
            <Carousel.Item>
              <img></img>
            </Carousel.Item>
          </Carousel> */}

          <div className="said">
            <h1>เสียงตอบรับจากผู้ใช้บริการ</h1>
            <h3>คุณภาพเกินราคา ช่างพดูจาสุภาพ เก่ง ทำงานเร็ว บริการประทับใจมากค่ะ</h3>
          </div>

          <i2 className="fas fa-quote-right"></i2>
        </div>
      </div>
    </section>
  );
}

export default CarouselReview;
