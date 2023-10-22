import React from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Header() {
      return (
      <div className="intro intro3">
      <div className="container">
            <div className="row center-content">
                  <div className="col-md-5 col-sm-6">
                  <h3>Good food choices are good investments.</h3>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                        purus a odio finibus bibendum amet leo.{" "}
                  </p>
                  <div className="space30"></div>
                  <div className="dual-btn">
                        <a href="#explore" className="btn btn-lg btn-primary page-scroll">
                        Order Now 
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        </a>{" "}
                        &nbsp; &nbsp;
                        <a
                        href="#about"
                        className="btn btn-lg btn-default btn-border page-scroll"
                        >
                        Learn More 
                        <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                  </div>
                  </div>
                  <div className="col-md-7 col-sm-6 no-padding"></div>
            </div>
      </div>
      </div>
      );
}

export default Header;
