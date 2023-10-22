import React from 'react';
import '../footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebookF, faInstagram, faLinkedin, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'



function Footer() {
      return (
            <footer className="footer2" id="footer2">
                  <div className="container">
                        <div className="row">
                              <div className="col-md-12 footerP text-center">
                                    <a href="#">Register</a>
                                    <a href="#">Forum</a>
                                    <a href="#">Affiliate</a>
                                    <a href="#">FAQ</a>
                              </div>
                              <div className="footer-social space30 text-center">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faYoutube} />
                                    <FontAwesomeIcon icon={faDribbble} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faInstagram} />
                              </div>
                        </div>
                        <div class="footer-copy text-center text-light">
                              <div class="container">
                                    © 2023. Foodera-React. All rights reserved.
                              </div>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer