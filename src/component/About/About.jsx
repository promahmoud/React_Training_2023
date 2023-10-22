import React, { Fragment } from 'react'
import './About.css'
import ImgAbout from '../../assets/1.png';
import ImgAbout2 from '../../assets/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";


function About() {

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      // https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
      const YoutubeEmbed = ({ embedId }) => (
            <div className="video-responsive">
                  <iframe
                        width="100%"
                        height="450"
                        src={`https://www.youtube.com/embed/${embedId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                  />
            </div>
      );
      YoutubeEmbed.propTypes = {
            embedId: PropTypes.string.isRequired
      };

return (
      <Fragment>

            <div className="intro intro-about2">
                  <div className="container">
                        <div className="row center-content">
                              <div className="col-md-7 ">
                                    <img src={ImgAbout} className="pull-left img-fluid" alt="" />
                              </div>
                              <div className="col-md-5">
                                    <h3>We pride ourselves on making real food from the best ingredients.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                                    <a href="#" className="btn btn-lg btn-primary">Learn More <i className="icon-arrow-right"></i></a>
                              </div>
                        </div>
                  </div>
            </div>

            <div className="intro intro-about2">
                  <div className="container">
                        <div className="row center-content">
                              <div className="col-md-5">
                                    <h3>We make everything by hand with the best possible ingredients.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    <ul className="list">
                                          <li><i className="fa fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
                                          <li><i className="fa fa-check"></i> Erat volutpat aliquet imperdiet.</li>
                                          <li><i className="fa fa-check"></i> purus a odio finibus bibendum.</li>
                                    </ul>

                                    <div className="space30"></div>
                                    <a href="#" className="btn btn-lg btn-primary">Learn More <i className="icon-arrow-right"></i></a>
                              </div>
                              <div className="col-md-7">
                                    <img src={ImgAbout2} className="pull-left img-fluid" alt="" />
                              </div>
                        </div>
                  </div>
            </div>

            <div className="space80"></div>
            <div className="video-action">
                  <div className="row text-center">
                        <h1>When a man's stomach is full it makes no <br /> difference whether he is rich or poor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <br />
                        <br />
                        {/* <!-- Button trigger modal --> */}
                        <Button variant="btn" className="swipebox-video" onClick={handleShow}>
                              <FontAwesomeIcon icon={faVideo} />
                              Watch Our Story
                        </Button>
                  </div>
            </div>

            {/* <!-- Modal --> */}

            <Modal show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  className='videomodal'
            >
                  {/* <Modal.Header closeButton></Modal.Header> */}
                  <Modal.Body>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                  </Modal.Body>
            </Modal>
      </Fragment>




)
}

export default About