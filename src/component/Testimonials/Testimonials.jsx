import React from 'react';
import '../Testimonials/Testimonials.css';
import datatesti from '../../json/dataTestimonials';
import { Carousel } from 'react-bootstrap';

const TestimonialsItems = datatesti.map((item, i) => {
      return (
            <Carousel.Item key={i} >
                  <img src={item.image} alt='auther image'  />
                  <Carousel.Caption>
                        <p>{item.review}</p>
                        <h3>{item.author}</h3>
                  </Carousel.Caption>
            </Carousel.Item>
      )

});

function Testimonials() {
      return (
            <div id="reviews" className="testimonials-color">
                  <div className="container">
                        <div className="about-inline text-center">
                              <h3>Testimonials </h3>
                        </div>
                        <div className="row">
                              <div className="col-md-12 text-center">
                                    <Carousel>
                                          {TestimonialsItems}
                                          {/* <Carousel.Item style={{ height: '200px', background: '#ddd' }}>
                                                <Carousel.Caption>
                                                      <h3>Third slide label</h3>
                                                      <p>
                                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                      </p>
                                                </Carousel.Caption>
                                          </Carousel.Item> */}
                                    </Carousel>
                              </div>
                        </div>
                        <div className="space100"></div>
                  </div>
            </div>
      )
}

export default Testimonials