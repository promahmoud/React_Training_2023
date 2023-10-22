import { faGlobeEurope, faPhotoVideo, faPiggyBank, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Stats() {
      return (
            <div id="stats2" className="bg-primary1">
                  <div className="container">
                        <div className="row">
                              <div className="col-md-3 col-sm-3">
                                    <div className="stats2-info">
                                          <FontAwesomeIcon icon={faPiggyBank} spin/>
                                          <p><span className="count">1287</span>+</p>
                                          <h2>Savings</h2>
                                    </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                    <div className="stats2-info">
                                          <FontAwesomeIcon icon={faPhotoVideo} spin/>
                                          <p><span className="count">5786</span>+</p>
                                          <h2>Photos</h2>
                                    </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                    <div className="stats2-info">
                                          <FontAwesomeIcon icon={faRocket}  spin/>
                                          <p><span className="count">1440</span>+</p>
                                          <h2>Rockets</h2>
                                    </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                    <div className="stats2-info">
                                          <FontAwesomeIcon icon={faGlobeEurope} spin />
                                          <p><span className="count">7110</span>+</p>
                                          <h2>Globes</h2>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Stats