import React from 'react';
import '../blog/blog.css';
import { Button, Card } from 'react-bootstrap';
import BlogData from '../../json/Datablog';


function Blog() {


      const blogItem = BlogData.map((item, i) => {
            return (
                  <div key={i} className="col-md-4"  >
                        <Card  className='card-product'>
                              <Card.Img variant="top" src={item.img} />
                              <Card.Body className='info-wrap'>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>Time: {item.time}| Serves: 1</Card.Text>
                                    
                                    <div className="price-wrap h3">
                                          <span className="price-new">{item.price}</span>
                                          <del className="price-old">{item.priceOld}</del>
                                    </div>
                                    <Button variant="primary">Order Now</Button>
                              </Card.Body>
                        </Card>
                  </div>
            )
      });
      return (
            <div id="explore" className="elements-content">
                  <div className="container">
                        <div className="about-inline text-center">
                              <h3>Explore Our Foods </h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                    live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                        <div className="row">
                              {/* <div className="col-md-4">
                                    <div className="card card-product">
                                          <div className="img-wrap"><img src="images/foods/01.jpg" alt="img" /></div>
                                          <div className="info-wrap">
                                                <h4 className="title">Rainbow Vegetable Sandwich</h4>
                                                <p className="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                                                <div className="price-wrap h3">
                                                      <span className="price-new">$10.50</span> <del className="price-old">$11.70</del>
                                                </div>
                                          </div>
                                          <div className="bottom-wrap">
                                                <a href="" className="btn btn-sm btn-primary float-right" data-toggle="modal" data-target="#modalContactForm">Order Now</a>
                                          </div>
                                    </div>

                              </div> */}
                              {blogItem}
                        </div>
                  </div>
            </div>
      )
}

export default Blog