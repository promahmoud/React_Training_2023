import React, { Fragment } from 'react'
import '../faq/faq.css'

function Faq() {
      return (
            <Fragment>
                  <div className="container" id="faq">
                        <div className="about-inline text-center">
                              <h3>Frequently Asked Questions </h3>
                        </div>
                  </div>

                  <div className="container">
                        <div className="row">
                              <div className="col-md-6 col-sm-6">
                                    <div className="faq">
                                          <h4> <span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                                    </div>
                              </div>

                              <div className="col-md-6 col-sm-6">
                                    <div className="faq">
                                          <h4> <span>~</span> Do you bake breads containing animal fats or products?</h4>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                                    </div>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                    <div className="faq">
                                          <h4> <span>~</span> Can I order your products online?</h4>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                                    </div>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                    <div className="faq">
                                          <h4> <span>~</span> When are you opening a shop near me?</h4>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                                    </div>
                              </div>
                        </div>
                        <div className="space100"></div>
                  </div>



                  <section className="parallax-content2 parallax2 text-center">
                        <div className="overlay"></div>
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-8">
                                          <h4>Baked fresh daily by bakers with passion.</h4>
                                    </div>
                                    <div className="col-md-4">
                                          <a href="#" className="btn btn-lg btn-primary pull-left">Learn More <i className="icon-arrow-right"></i></a>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="text-center">
                        <div className="cta-wrap subscribe-elt2 ">
                              <div className="container">
                                    <div className="col-md-12">
                                          <h1>Hurry up! Subscribe our newsletter <br/> and get<span> 25% Off</span></h1>
                                          <p>Limited time offer for this month. No credit card required.</p>

                                          <form className="intro-newsletter" action="#" id="invite" method="POST">
                                                <div className="row">
                                                      <div className="col-md-8">
                                                            <input className="e-mail" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email"/>
                                                      </div>
                                                      <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" type="submit">Subscribe</button>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
            </Fragment>
      )
}

export default Faq