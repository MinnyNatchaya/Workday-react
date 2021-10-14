function CarouselReview() {
  return (
    <section className="review">
      <div className="container">
        <div className="comment">
          <i1 className="fas fa-quote-left"></i1>

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

//////////////////////////////////
// import React from 'react';
// import Slider from 'react-slick';
// export default function CarouselReview() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     // <section className="review">
//     //   <div className="container">
//     //     <div className="comment">
//     <Slider {...settings}>
//       <div>
//         <img src={require('../../images/comment_blur.png').default} alt="circle-all" />
//       </div>
//       <div>
//         <img src={require('../../images/comment_blur.png').default} alt="circle-all" />
//       </div>
//       <div>
//         <img src={require('../../images/comment_blur.png').default} alt="circle-all" />
//       </div>
//     </Slider>
//     //   </div>
//     // </div>
//     // </section>
//   );
// }
/////////////////////////////////////
// import Carousel from 'react-bootstrap/Carousel';
// function CarouselReview() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselReview;
